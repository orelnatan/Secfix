import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsGridComponent } from './elements-grid.component';

@NgModule({
    declarations: [ 
        ElementsGridComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ElementsGridComponent
    ]
})
export class ElementsGridModule {}