import { Component, Input, Output, EventEmitter, } from '@angular/core';

@Component({
    selector: 'primary-button',
    templateUrl: './primary-button.component.html',
    styleUrls: ['./primary-button.component.scss'],
})

export class PrimaryButtonComponent {
    @Input() dosubmit: boolean;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() pending: boolean;
    @Input() readonly: boolean;

    @Output() onclick: EventEmitter<MouseEvent> = new EventEmitter();
}