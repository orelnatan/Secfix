import { NgModule } from '@angular/core';

import { RedirectResolver } from './resolvers';
import { RedirectDirective } from './directives';

@NgModule({
    declarations: [ 
        RedirectDirective
    ],
    providers: [
        RedirectResolver
    ],
    exports: [
        RedirectDirective,
    ]
})
export class RedirectModule {}