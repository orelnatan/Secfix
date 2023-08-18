import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreEffects } from './core.effects';
import { coreReducer } from './core.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('core', coreReducer),
        EffectsModule.forFeature([ CoreEffects ]),
    ]
})
export class CoreStoreModule {}


