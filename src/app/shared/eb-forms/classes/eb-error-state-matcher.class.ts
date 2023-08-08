import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when control is invalid, and the form is submitted. */
export class EbErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
        const submitted: boolean = form && form.submitted;
        const invalid: boolean = control && control.invalid

        return invalid && submitted;
    }
}