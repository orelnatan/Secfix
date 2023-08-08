import { Component, Input} from '@angular/core';

@Component({
    selector: 'input-field',
    templateUrl: './input-field.component.html',
    styleUrls: [`./input-field.component.scss`]
})

export class InputFieldComponent {
    @Input() gap: number;
}