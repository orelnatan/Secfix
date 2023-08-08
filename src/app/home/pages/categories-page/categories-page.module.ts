import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@secfix/shared/layout';
import { DirectivesModule } from '@secfix/shared/directives';
import { ElementsGridModule } from '@secfix/shared/components';
import { CategoryCardModule, PageLoaderModule } from '@secfix/home/components';

import { CategoriesPageComponent } from './categories-page.component';

@NgModule({
    declarations: [
        CategoriesPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        CategoryCardModule,
        DirectivesModule,
        ElementsGridModule,
        PageLoaderModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            { 
                path: 'categories',
                component: CategoriesPageComponent,
                data: {
                    redirect: {
                        route: "home/brands",
                    },
                    crumbs: [
                        {
                            path: "categories",
                            name: "Categories"
                        }
                    ]
                }
            },
        ])
    ]
})
export class CategoriesPageModule {}