// Actions.
import { SET_NETWORK_CONNECTION_STATE } from '../constants/actionTypes';

// States.
import { default as initialState } from '../states/NetworkState';

export default function networkReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NETWORK_CONNECTION_STATE:
            if (typeof action.state === 'boolean') {
                state = {
                    ...state,
                    isConnected: action.state
                };
            }

            break;
        default:
            break;
    }

    return state;
}
