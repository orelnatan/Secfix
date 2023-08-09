import { Actions } from './core.actions';

import { CoreState } from './core-state.model';

const initialState: CoreState = {}

export function coreReducer(state = initialState, action: Actions): CoreState {
    switch(action.type) {
		default: {
            return {
				... state
			}
        };
    }
}


