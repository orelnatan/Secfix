import { Injectable, Renderer2, RendererFactory2 }  from '@angular/core';
import { Data } from '@angular/router';

import { GLOBAL_HOST } from '../consts';

@Injectable({ 
    providedIn: "root"
})
export class GlobalEventsService {
    private _renderer2: Renderer2;
    
    constructor(
        private readonly rendererFactory: RendererFactory2
    ) { this._renderer2 = this.rendererFactory.createRenderer(null, null); }

    public async dispatch(type: string, data: Data = {}, delay: number = 0): Promise<void> {
        await this._delay(delay);

        window.dispatchEvent(new CustomEvent(type, {
                detail: data
            })
        )
    }

    public intercept(type: string, callback: Function): Function {
        return this._renderer2.listen(GLOBAL_HOST, type, event => {
            callback(event);    
        })
    }

    private _delay(ms: number): Promise<unknown> {
        return new Promise(
            (resolve: (value: PromiseLike<unknown>) => void) => setTimeout(resolve, ms)
        );
    }
}