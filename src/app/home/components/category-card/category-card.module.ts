import { NgModule } from '@angular/core';

import { EntityCardModule } from '../entity-card';
import { CategoryCardComponent } from './category-card.component';

@NgModule({
    declarations: [
        CategoryCardComponent,
    ],
    imports: [
        EntityCardModule
    ],
    exports: [
        CategoryCardComponent
    ]
})
export class CategoryCardModule {}