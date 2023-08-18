import { Injectable, Injector } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EntitiesAbstractService } from '../services';
import { Entity } from '../models';

import * as HomeActions from './home.actions';

@Injectable()
export class HomeEffects {
    constructor(
        private readonly injector: Injector,
        private readonly actions$: Actions,
    ) {}

    readonly fetchAll$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<HomeActions.FetchAll>(
                HomeActions.HomeActionTypes.FETCH_ALL
            ),
            mergeMap((action: HomeActions.FetchAll): Observable<HomeActions.ListReady | HomeActions.Failure> => {
                const service = this.injector.get<EntitiesAbstractService>(action.payload.service);

                return service.fetchAll(action.payload.parentId).pipe(
                    map((entities: Array<Entity>): HomeActions.ListReady => {
                        return new HomeActions.ListReady({ entities: entities })
                    }),
                    catchError(error => of(
                        new HomeActions.Failure({ error }))),
                )
            })  
        )
    })

    readonly getSingle$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<HomeActions.GetSingle>(
                HomeActions.HomeActionTypes.GET_SINGLE
            ),
            mergeMap((action: HomeActions.GetSingle): Observable<HomeActions.EntityReady | HomeActions.Failure> => {
                const service = this.injector.get<EntitiesAbstractService>(action.payload.service);

                return service.getSingleEntity(action.payload.parentId, action.payload.childId!).pipe(
                    map((entity: Entity): HomeActions.EntityReady => {
                        return new HomeActions.EntityReady({ entity: entity, type: action.payload.type })
                    }),
                    catchError(error => of(
                        new HomeActions.Failure({ error }))),
                )
            })  
        )
    })
}


// http://localhost:4200/home/brands/522/categories/20739/families/4186101/products/42899977