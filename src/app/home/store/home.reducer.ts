import { Actions, HomeActionTypes } from './home.actions';

import { EntityType, HomeState, IProgress } from './home-state.model';

const initialState: HomeState = {
    entities: [],
    brand: null,
    category: null,
    family: null,
    product: null,
    inProgress: {} as IProgress,
}

export function homeReducer(state = initialState, action: Actions): HomeState {
    switch(action.type) {
        case HomeActionTypes.FETCH_ALL: {
            return {
                ... state,
                inProgress: {
                    ... state.inProgress,
                    list: true,
                }
            };
        };
        case HomeActionTypes.GET_SINGLE: {
            const type: EntityType = action.payload.type;

            return {
                ... state,
                inProgress: {
                    ... state.inProgress,
                    [type]: true,
                }
            };
        };
        case HomeActionTypes.LIST_READY: {
            return {
                ... state,
                entities: action.payload.entities,
                inProgress: {
                    ... state.inProgress,
                    list: false,
                }
            };
        };
        case HomeActionTypes.ENTITY_READY: {
            const type: EntityType = action.payload.type;

            return {
                ... state,
                [type]: action.payload.entity,
                inProgress: {
                    ... state.inProgress,
                    [type]: false,
                }
            };
        };
        case HomeActionTypes.FAILURE: {
            return {
                ... state,
                inProgress: {} as IProgress,
            };
        };
		default: {
            return {
				... state
			}
        };
    }
}


