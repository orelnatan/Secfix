import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SnackbarModule } from '@secfix/shared/snackbar';
import { AuthenticationService } from '@secfix/auth/services';

import { AuthEffects } from './auth.effects';
import { authReducer } from './auth.reducer';

@NgModule({
    imports: [
        CommonModule,
        SnackbarModule,
        StoreModule.forFeature('auth', authReducer),
        EffectsModule.forFeature([ AuthEffects ]),
    ],
    providers: [ 
        AuthenticationService
    ]
})
export class AuthStoreModule {}


