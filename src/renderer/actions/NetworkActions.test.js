import { expect } from 'chai';

// Actions.
import { setNetworkConnectionState } from './NetworkActions';

// Constants.
import { SET_NETWORK_CONNECTION_STATE } from '../constants/actionTypes';

describe('network actions', () => {
    it('should create an action to set the network to connected', () => {
        const expectedAction = { type: SET_NETWORK_CONNECTION_STATE, state: true };

        expect(setNetworkConnectionState(true)).to.deep.equal(expectedAction);
    });

    it('should create an action to set the network to disconnected', () => {
        const expectedAction = { type: SET_NETWORK_CONNECTION_STATE, state: false };

        expect(setNetworkConnectionState(false)).to.deep.equal(expectedAction);
    });
});
