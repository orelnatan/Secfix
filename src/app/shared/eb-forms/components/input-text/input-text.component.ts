import { Component, EventEmitter, Input, Output } from '@angular/core';

import { EbInputComponent } from '../eb-input';

@Component({
    selector: 'input-text',
    templateUrl: './input-text.component.html',
})

export class InputTextComponent extends EbInputComponent {
    @Input() value: string;
    
    @Output() onchange: EventEmitter<string> = new EventEmitter();
}