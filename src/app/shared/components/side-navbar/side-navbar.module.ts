import { NgModule } from '@angular/core';

import { SideNavbarComponent } from './side-navbar.component';

@NgModule({
    declarations: [ 
        SideNavbarComponent,
    ],
    exports: [
        SideNavbarComponent
    ]
})
export class SideNavbarModule {}