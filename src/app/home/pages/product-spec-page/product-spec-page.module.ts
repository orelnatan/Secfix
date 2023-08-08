import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { LayoutModule } from '@secfix/shared/layout';
import { DirectivesModule } from '@secfix/shared/directives';
import { PipesModule } from '@secfix/shared/pipes';
import { ElementsGridModule } from '@secfix/shared/components';

import { ProductSpecPageComponent } from './product-spec-page.component';
import { ProductHeaderComponent, ProductSpecItemComponent } from './components';
import { PageLoaderModule } from '@secfix/home/components';

@NgModule({
    declarations: [
        ProductSpecPageComponent,
        ProductHeaderComponent,
        ProductSpecItemComponent
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        DirectivesModule,
        PageLoaderModule,
        ElementsGridModule,
        NgxSkeletonLoaderModule,
        PipesModule,
        RouterModule.forChild([
            { 
                path: '',
                component: ProductSpecPageComponent,
                data: {
                    redirect: {
                        route: "home/brands/brandId/categories/categoryId/families/familyId/products",
                    },
                }
            },
        ])
    ]
})
export class ProductSpecPageModule {}