import { createFeatureSelector } from '@ngrx/store';

import { CoreState } from './core-state.model';

export const getCoreState = createFeatureSelector<CoreState>('core');

