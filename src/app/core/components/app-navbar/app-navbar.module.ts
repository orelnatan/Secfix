import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { DirectivesModule } from '@secfix/shared/directives';

import { AppNavbarComponent } from './app-navbar.component';

@NgModule({
    declarations: [
        AppNavbarComponent
    ],
    imports: [ 
        CommonModule,
        RouterLink,
        MatIconModule,
        DirectivesModule
    ],
    exports: [
        AppNavbarComponent
    ]
})
export class AppNavbarModule {}