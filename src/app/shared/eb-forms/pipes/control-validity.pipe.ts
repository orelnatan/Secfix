import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { EbErrorStateMatcher } from '../classes';

@Pipe({
   name: 'controlValidity',
   pure: false
})
export class ControlValidityPipe implements PipeTransform { 
    matcher: ErrorStateMatcher = new EbErrorStateMatcher();
    
    constructor(
        private readonly controlContainer: ControlContainer
    ){}

    transform(control: AbstractControl): boolean {
        return this.matcher.isErrorState(<FormControl>control, <NgForm>this.controlContainer);
    }
}