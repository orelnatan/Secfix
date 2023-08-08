import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@secfix/shared/layout';
import { DirectivesModule } from '@secfix/shared/directives';
import { ElementsGridModule } from '@secfix/shared/components';
import { PageLoaderModule, ProductCardModule } from '@secfix/home/components';

import { ProductsPageComponent } from './products-page.component';

@NgModule({
    declarations: [
        ProductsPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        ProductCardModule,
        PageLoaderModule,
        DirectivesModule,
        ElementsGridModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { 
                path: 'products',
                component: ProductsPageComponent,
                data: {
                    redirect: {
                        route: "home/brands/brandId/categories/categoryId/families",
                    },
                    crumbs: [
                        {
                            path: "products",
                            name: "Products"
                        } 
                    ]
                }
            },
        ])
    ]
})
export class ProductsPageModule {}