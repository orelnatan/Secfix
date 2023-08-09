import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreStoreModule } from '@secfix/core/store';
import { AuthStoreModule } from '@secfix/auth/store';

@NgModule({
    imports: [
		CommonModule,
        AuthStoreModule,
        CoreStoreModule,
        StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, 
        }),
    ]
  })
  export class AppStoreModule {}


