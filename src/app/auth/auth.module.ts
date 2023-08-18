import { NgModule } from '@angular/core';

import { LayoutModule } from '@secfix/shared/layout';
import { CrumbsNavbarModule } from '@secfix/shared/components';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthRootComponent } from './auth-root.component';

@NgModule({
    declarations: [
        AuthRootComponent,
    ],
    imports: [ 
        AuthRoutingModule,
        LayoutModule,
        CrumbsNavbarModule
    ]
})
export class AuthModule {}