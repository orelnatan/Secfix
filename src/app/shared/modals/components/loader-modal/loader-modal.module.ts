import { NgModule } from '@angular/core';

import { ModalModule, SpinnerModule } from '@secfix/shared/components';

import { LoaderModalComponent } from './loader-modal.component';

@NgModule({
    declarations: [ 
        LoaderModalComponent,
    ],
    imports: [
        SpinnerModule,
        ModalModule
    ],
})
export class LoaderModalModule {}