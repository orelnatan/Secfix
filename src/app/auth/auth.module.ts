import { NgModule } from '@angular/core';

import { LayoutModule } from '@secfix/shared/layout';
import { CrumbsNavbarModule } from '@secfix/shared/components';

import { AuthenticationService } from './services';
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
    ],
    providers: [
        AuthenticationService
    ]
})
export class AuthModule {}