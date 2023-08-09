import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@secfix/shared/layout';
import { SideNavbarModule } from '@secfix/shared/components';
import { AuthGuard } from '@secfix/auth/guards';

import { DirectivesModule } from './directives';
import { AppNavbarModule } from './components';
import { CoreRoutingModule } from './core-routing.module';
import { CoreRootComponent } from './core-root.component';

@NgModule({
    declarations: [
        CoreRootComponent,
    ],
    imports: [ 
        CoreRoutingModule,
        MatDialogModule,
        AppNavbarModule,
        LayoutModule,
        SideNavbarModule,
        DirectivesModule,
    ],
    providers: [
        AuthGuard
    ]
})
export class CoreModule {}