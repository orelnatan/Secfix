import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors, } from '@angular/forms';

import * as NgxPasswordValidator from 'password-validator';

interface IPasswordErrorDesc {
    validation: string;
    arguments?: number;
    inverted?: boolean;
    message: string;
}

@Directive({
    selector: '[password][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: PasswordValidator, multi: true }
    ]
})

export class PasswordValidator implements Validator { 
    validate(control: FormControl): ValidationErrors | null {
        if(!control.value) return null;

        const results = <Array<IPasswordErrorDesc>>new NgxPasswordValidator()
        .is().min(10, 'Password should have a minimum length of 10 characters')                                  
        .is().max(14, 'Password should have a maximum length of 14 characters')                                 
        .has().lowercase(6, 'Password should have a minimum of 6 lowercase letters')                         
        .has().digits(4, 'Password should have a minimum of 4 digits')                               
        .has().not().spaces(0, 'Password should not have spaces')
        .validate(control.value, { details: true });

        return results.length ? {
            password: {
                errors: results,
                value: control.value
            }
        } : null;                     
    }
}


