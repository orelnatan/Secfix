import { NgModule } from '@angular/core';

import { LogoutDirective } from './logout.directive';

@NgModule({
    declarations: [
        LogoutDirective
    ],
    exports: [
        LogoutDirective
    ]
})
export class DirectivesModule {}