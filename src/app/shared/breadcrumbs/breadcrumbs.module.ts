import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpinnerModule } from '../components';

import { CrumbsRedirectDirective } from './directives';
import { VisibilityPipe } from './pipes';
import { BreadcrumbsComponent, CrumbComponent } from './components';

@NgModule({
    declarations: [ 
        BreadcrumbsComponent,
        CrumbComponent,
        CrumbsRedirectDirective,
        VisibilityPipe,
    ],
    imports: [
        CommonModule,
        SpinnerModule
    ],
    exports: [
        BreadcrumbsComponent,
    ],
})
export class BreadcrumbsModule {}