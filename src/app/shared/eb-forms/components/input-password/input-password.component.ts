import { Component, EventEmitter, Input, Output } from '@angular/core';

import { EbInputComponent } from '../eb-input';

@Component({
    selector: 'input-password',
    templateUrl: './input-password.component.html',
    styleUrls: [`./input-password.component.scss`]
})

export class InputPasswordComponent extends EbInputComponent {
    @Input() value: string;
    @Input() visible: boolean;

    @Output() onchange: EventEmitter<string> = new EventEmitter();
}