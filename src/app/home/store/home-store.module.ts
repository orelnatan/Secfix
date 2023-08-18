import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeEffects } from './home.effects';
import { homeReducer } from './home.reducer';
import { BrandsService, CategoriesService, FamiliesService, ProductsService } from '../services';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('home', homeReducer),
        EffectsModule.forFeature([ HomeEffects ]),
    ],
    providers: [
        BrandsService,
        CategoriesService,
        FamiliesService,
        ProductsService
    ]
})
export class HomeStoreModule {}


