import { NgModule } from '@angular/core';

import { RegExpPipe } from './reg-exp.pipe';
import { SuffixPipe } from './suffix.pipe';

@NgModule({
    declarations: [
        RegExpPipe,
        SuffixPipe
    ],
    exports: [
        RegExpPipe,
        SuffixPipe
    ]
})
export class PipesModule {}