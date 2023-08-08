import { NgModule } from '@angular/core';

import { EntityCardModule } from '../entity-card';
import { ProductCardComponent } from './product-card.component';

@NgModule({
    declarations: [
        ProductCardComponent,
    ],
    imports: [
        EntityCardModule
    ],
    exports: [
        ProductCardComponent
    ]
})
export class ProductCardModule {}