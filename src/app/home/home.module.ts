import { NgModule } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { LayoutModule } from '@secfix/shared/layout';
import { CrumbsNavbarModule, SideNavbarModule, UtilsNavbarModule } from '@secfix/shared/components';

import { BrandsService, CategoriesService, FamiliesService, ProductsService } from './services';
import { HomeRoutingModule } from './home-routing.module';
import { HomeRootComponent } from './home-root.component';

@NgModule({
    declarations: [
        HomeRootComponent,
    ],
    imports: [ 
        HomeRoutingModule,
        LayoutModule,
        SideNavbarModule,
        UtilsNavbarModule,
        CrumbsNavbarModule
    ],
    providers: [
        TitleCasePipe,
        BrandsService,
        CategoriesService,
        FamiliesService,
        ProductsService
    ]
})
export class HomeModule {}