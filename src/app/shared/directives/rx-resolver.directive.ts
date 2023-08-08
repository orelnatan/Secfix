import { Directive, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize, isObservable, Observable, Subscription } from 'rxjs';

declare type defaultT = any;

@Directive({
    selector: '[rxResolver]',
    exportAs: 'resolver'
})
export class RxResolverDirective<T> implements OnChanges, OnDestroy {
    @Input('rxResolver') observable: Observable<T>;

    @Input() default: defaultT;
    
    @Output() resolved: EventEmitter<T> = new EventEmitter();
    @Output() failed: EventEmitter<HttpErrorResponse> = new EventEmitter();
    @Output() start: EventEmitter<void> = new EventEmitter();
    @Output() done: EventEmitter<void> = new EventEmitter();

    private _subscription: Subscription;

    private _data: T;
    private _error: HttpErrorResponse;
    private _inProcess: boolean;

    ngOnChanges(): void {
        this._data = this.default;

        this._subscription?.unsubscribe();
        if(isObservable(this.observable)) {
            this._inProcess = true;

            this.start.emit();
            this._subscription = this.observable.pipe(
                finalize(() => { 
                    this._inProcess = false;

                    this.done.emit();
                })
            ).subscribe({
                next: (response: T): void => {
                    this._data = response;

                    this.resolved.emit(response);
                },
                error: (error: HttpErrorResponse): void => {
                    this._error = error;
                    
                    this.failed.emit(error);
                },
            })
        }
    }

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
    }

    get data(): T {
        return this._data;
    }

    get error(): HttpErrorResponse {
        return this._error;
    }

    get inProcess(): boolean {
        return this._inProcess
    }
}