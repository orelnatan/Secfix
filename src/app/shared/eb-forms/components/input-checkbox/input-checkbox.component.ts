import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

import { EbInputComponent } from '../eb-input';

@Component({
  selector: 'input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
})

export class InputCheckboxComponent extends EbInputComponent implements OnChanges {
    @Input() value: boolean;
    @Output() onchange: EventEmitter<boolean> = new EventEmitter();

    subject$: Subject<void> = new Subject<void>();

    constructor() {
        super();
        
        this.subject$.pipe(debounceTime(0))
        .subscribe((): void => {
            this.control?.setValue(this.value ? this.value : null);
        });
    }

    ngOnChanges(): void {
        this.subject$.next();
    }
}