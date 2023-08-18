import { ProviderToken } from '@angular/core';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { EntitiesAbstractService } from '../services';
import { Entity } from '../models';
import { EntityType } from './home-state.model';

export enum HomeActionTypes {
    FETCH_ALL = "[HOME] Fetch All",
    GET_SINGLE = "[HOME] Get Single",
    LIST_READY = "[HOME] List Ready",
    ENTITY_READY = "[HOME] Entity Ready",
    FAILURE = "[HOME] Failure"
}

export class FetchAll implements Action {
    readonly type = HomeActionTypes.FETCH_ALL;

    constructor(public payload: {
		service: ProviderToken<EntitiesAbstractService>,
        parentId?: number
	}){}
}

export class GetSingle implements Action {
    readonly type = HomeActionTypes.GET_SINGLE;

    constructor(public payload: {
		service: ProviderToken<EntitiesAbstractService>,
        type: EntityType
        parentId: number,
        childId?: number,
	}){}
}

export class ListReady implements Action {
    readonly type = HomeActionTypes.LIST_READY;

    constructor(public payload: {
		entities: Array<Entity>,
	}){}
}

export class EntityReady implements Action {
    readonly type = HomeActionTypes.ENTITY_READY;

    constructor(public payload: {
		entity: Entity,
        type: EntityType
	}){}
}

export class Failure implements Action {
    readonly type = HomeActionTypes.FAILURE;

    constructor(public payload: {
        error: HttpErrorResponse
    }){}
}

export type Actions = FetchAll | GetSingle | ListReady | EntityReady | Failure;