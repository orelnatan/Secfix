import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@secfix/shared/layout';
import { SideNavbarModule } from '@secfix/shared/components';
import { GlobalEventsModule } from '@secfix/shared/global-events';

import { SecfixLocalStorageService } from './services';
import { DirectivesModule } from './directives';
import { AppNavbarModule } from './components';
import { CoreRoutingModule } from './core-routing.module';
import { CoreRootComponent } from './core-root.component';

import { AuthGuard } from './guards';

@NgModule({
    declarations: [
        CoreRootComponent,
    ],
    imports: [ 
        HttpClientModule,
        CoreRoutingModule,
        MatDialogModule,
        AppNavbarModule,
        LayoutModule,
        SideNavbarModule,
        DirectivesModule,
        GlobalEventsModule,
    ],
    providers: [
        SecfixLocalStorageService,
        AuthGuard
    ]
})
export class CoreModule {}