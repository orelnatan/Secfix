import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@secfix/shared/layout';
import { DirectivesModule } from '@secfix/shared/directives';
import { ElementsGridModule, SpinnerModule } from '@secfix/shared/components';
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
        DirectivesModule,
        ElementsGridModule,
        PageLoaderModule,
        SpinnerModule,
        RouterModule.forChild([
            { path: '', component: BrandsPageComponent },
        ])
    ]
})
export class BrandsPageModule {}