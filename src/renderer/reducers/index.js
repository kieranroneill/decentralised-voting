import { combineReducers } from 'redux';

// Reducers.
import networkReducer from './NetworkReducer';

/**
 * Combine the reducers.
 */
export default combineReducers({
    network: networkReducer
});
