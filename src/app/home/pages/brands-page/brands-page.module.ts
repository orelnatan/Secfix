import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@secfix/shared/layout';
import { ElementsGridModule } from '@secfix/shared/components';
import { BrandCardModule, PageLoaderModule } from '@secfix/home/components';

import { BrandsPageComponent } from './brands-page.component';

@NgModule({
    declarations: [
        BrandsPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        BrandCardModule,
        ElementsGridModule,
        PageLoaderModule,
        RouterModule.forChild([
            { path: '', component: BrandsPageComponent },
        ])
    ]
})
export class BrandsPageModule {}