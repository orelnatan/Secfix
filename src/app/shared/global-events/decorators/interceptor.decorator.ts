import { Injector, inject, RendererFactory2, Injectable, Inject, TypeProvider, Renderer2, ɵPipeDef } from "@angular/core";

import { IGlobalEvent, IPipeType } from "../models";
import { GLOBAL_HOST, NG_PIPE_DEF } from "../consts";

function isPipe<T>(target: any): target is IPipeType<T> {
    return !!target[NG_PIPE_DEF];
}

export function Interceptor<T>(events: IGlobalEvent[] = [], deps: TypeProvider[] = []):
    <U extends T & (new (...args: any[]) => {})>(constructor: U) => U {
    return function<U extends T & { new(...args: any[]): {} }>(constructor: U): U {
        
        @Injectable({ 
            providedIn: "root"
        })
        class Interceptor extends constructor {
            unlisteners: Function[] = [];

            constructor(@Inject('args') ...args: any[]) {
                args = args.filter((arg: TypeProvider) => arg);
        
                const injector: Injector = inject(Injector);
                deps.forEach((dependency: TypeProvider): void => {
                    args.push(injector.get(dependency))
                });
        
                super(...args);
        
                const rendererFactory2: RendererFactory2 = injector.get(RendererFactory2);
                const renderer2: Renderer2 = rendererFactory2.createRenderer(null, null);
                
                events.forEach((event: IGlobalEvent): void => {
                    this.unlisteners.push(renderer2.listen(GLOBAL_HOST, event.type, payload => {
                        (<any>this)[event.action](payload);
                    }));
                });
            }
        }
        
        const onDestroy: Function = constructor.prototype.ngOnDestroy;
        constructor.prototype.ngOnDestroy = function (): void {
            this.unlisteners.forEach((unlistener: Function) => {
                unlistener();
            });
            
            onDestroy && onDestroy.call(this);
        };

        if (isPipe(constructor)) {
            const def: ɵPipeDef<T> = (constructor as IPipeType<T>).ɵpipe;

            def.onDestroy = function (this: any): void {
                this.unlisteners.forEach((unlistener: Function) => {
                    unlistener();
                });
                
                this.ngOnDestroy && this.ngOnDestroy.call(this);
            };
        } 

        return Interceptor;
    }
}

  