import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@secfix/shared/layout';
import { DirectivesModule } from '@secfix/shared/directives';
import { ElementsGridModule } from '@secfix/shared/components';
import { FamilyCardModule, PageLoaderModule } from '@secfix/home/components';

import { FamiliesPageComponent } from './families-page.component';

@NgModule({
    declarations: [
        FamiliesPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        FamilyCardModule,
        PageLoaderModule,
        ElementsGridModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'families', pathMatch: 'full' },
            { 
                path: 'families',
                component: FamiliesPageComponent,
                data: {
                    redirect: {
                        route: "home/brands/brandId/categories",
                    },
                    crumbs: [
                        {
                            path: "families",
                            name: "Families"
                        }
                    ]
                }
            },
        ])
    ]
})
export class FamiliesPageModule {}