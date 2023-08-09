import { AuthActionTypes, Actions } from './auth.actions';

import { AuthState } from './auth-state.model';

const initialState: AuthState = {
    user: null,
    inProgress: false,
}

export function authReducer(state = initialState, action: Actions): AuthState {
    switch(action.type) {
        case AuthActionTypes.LOGIN: {
            return {
                ... state,
                inProgress: true,
            };
        };
        case AuthActionTypes.LOGOUT: {
            return {
                ... state,
                user: null
            };
        };
        case AuthActionTypes.SUCCESS: {
            return {
                ... state,
                user: action.payload.user || null,
                inProgress: false,
            };
        };
        case AuthActionTypes.FAILURE: {
            return {
                ... state,
                inProgress: false,
            };
        };
		default: {
            return {
				... state
			}
        };
    }
}


