import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[disabledState]',
})
export class DisabledStateDirective implements OnChanges {
    @Input() disabledState: boolean;
    
    constructor(
        private readonly elementRef: ElementRef
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if(this.disabledState) {
            this.elementRef.nativeElement.classList.add('input-disabled-state');
        } else {
            this.elementRef.nativeElement.classList.remove('input-disabled-state');
        }
    }
}