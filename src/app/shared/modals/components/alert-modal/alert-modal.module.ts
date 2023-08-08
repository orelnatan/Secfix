import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ModalModule } from '@secfix/shared/components';

import { AlertModalComponent } from './alert-modal.component';

@NgModule({
    declarations: [ 
        AlertModalComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        ModalModule, 
    ]
})
export class AlertModalModule {}