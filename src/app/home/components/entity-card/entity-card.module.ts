import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EntityCardComponent } from './entity-card.component';

@NgModule({
    declarations: [
        EntityCardComponent,
    ],
    imports: [
        RouterModule
    ],
    exports: [
        EntityCardComponent
    ]
})
export class EntityCardModule {}