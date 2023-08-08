import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '@secfix/shared/layout';
import { DirectivesModule } from '@secfix/shared/directives';
import { SnackbarModule } from '@secfix/shared/snackbar';
import { EbFormsModule } from '@secfix/shared/eb-forms';
import { ValidatorsModule } from '@secfix/auth/validators';

import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginPageComponent,
        LoginFormComponent
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        SnackbarModule,
        DirectivesModule,
        FormsModule,
        DirectivesModule,
        ValidatorsModule,
        EbFormsModule,
        RouterModule.forChild([
            { path: '', component: LoginPageComponent },
        ])
    ],
})
export class LoginPageModule {}