import { NgModule } from '@angular/core';

import { PasswordValidator } from './password.validator';

@NgModule({
    declarations: [ 
        PasswordValidator,
    ],
    exports: [
        PasswordValidator
    ]
})
export class ValidatorsModule {}