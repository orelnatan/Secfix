import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EntityType, HomeState } from './home-state.model';
import { Entity } from '../models';

export const getHomeState = createFeatureSelector<HomeState>('home');

export const getEntities = createSelector(
    getHomeState,
    (state: HomeState): Array<Entity> => {
        return state.entities;
    }
);

// Parameterized NgRx Selectors
export const getEntity = (type: EntityType) => createSelector(
    getHomeState,
    (state: HomeState): Entity | null => { 
        return state[type]
    }
);

// Parameterized NgRx Selectors(with optional parameters)
export const getInProgress = (type?: EntityType) => createSelector(
    getHomeState,
    (state: HomeState): boolean => { 
        return state.inProgress[type!] || state.inProgress.list
    }
);
