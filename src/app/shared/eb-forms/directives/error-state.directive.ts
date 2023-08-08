import { AfterViewChecked, Directive, ElementRef, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ControlValidityPipe } from '../pipes';

@Directive({
    selector: '[errorState]',
    providers: [ControlValidityPipe, ]
})
export class ErrorStateDirective implements AfterViewChecked {
    @Input('errorState') control: AbstractControl;
    
    constructor(
        private readonly elementRef: ElementRef,
        private readonly controlValidityPipe: ControlValidityPipe
    ) {}

    ngAfterViewChecked(): void {
        if(this.controlValidityPipe.transform(this.control)) {
            this.elementRef.nativeElement.classList.add('input-error-state');
        } else {
            this.elementRef.nativeElement.classList.remove('input-error-state');
        }
    }
}