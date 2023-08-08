import { NgModule } from '@angular/core';

import { BreadcrumbsModule } from '@secfix/shared/breadcrumbs';

import { CrumbsNavbarComponent } from './crumbs-navbar.component';

@NgModule({
    declarations: [ 
        CrumbsNavbarComponent,
    ],
    imports: [
        BreadcrumbsModule
    ],
    exports: [
        CrumbsNavbarComponent
    ]
})
export class CrumbsNavbarModule {}