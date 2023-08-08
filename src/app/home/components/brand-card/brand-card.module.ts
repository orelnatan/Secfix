import { NgModule } from '@angular/core';

import { EntityCardModule } from '../entity-card';
import { BrandCardComponent } from './brand-card.component';

@NgModule({
    declarations: [
        BrandCardComponent,
    ],
    imports: [
        EntityCardModule
    ],
    exports: [
        BrandCardComponent
    ]
})
export class BrandCardModule {}