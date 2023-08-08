import { NgModule } from '@angular/core';

import { EntityCardModule } from '../entity-card';
import { FamilyCardComponent } from './family-card.component';

@NgModule({
    declarations: [
        FamilyCardComponent,
    ],
    imports: [
        EntityCardModule
    ],
    exports: [
        FamilyCardComponent
    ]
})
export class FamilyCardModule {}