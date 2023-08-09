import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth-state.model';
import { IUser } from '../models';

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getUser = createSelector(
    getAuthState,
    (state: AuthState): IUser => {
        return state.user!;
    }
);

export const getInProgress = createSelector(
    getAuthState,
    (state: AuthState): boolean => {
        return state.inProgress;
    }
);

