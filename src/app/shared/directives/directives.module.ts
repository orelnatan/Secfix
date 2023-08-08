import { NgModule } from '@angular/core';

import { LoaderDirective } from './loader.directive';
import { RxResolverDirective } from './rx-resolver.directive';
import { NgLetDirective } from './ng-let.directive';

@NgModule({
    declarations: [
        LoaderDirective,
        RxResolverDirective,
        NgLetDirective,
    ],
    exports: [
        LoaderDirective,
        RxResolverDirective,
        NgLetDirective,
    ]
})
export class DirectivesModule {}