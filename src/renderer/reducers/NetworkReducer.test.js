import { expect } from 'chai';

// Actions.
import { SET_NETWORK_CONNECTION_STATE } from '../constants/actionTypes';

// States.
import { default as initialState } from '../states/NetworkState';

// Module.
import networkReducer from './NetworkReducer';

describe('reducers/NetworkReducer', () => {
    const scope = {
        initialState: null
    };

    beforeEach(() => {
        scope.initialState = Object.assign({}, initialState);
    });

    afterEach(() => {
        scope.initialState = null;
    });

    describe('when no type is provided', () => {
        it('should return the initial state', () => {
            const state = networkReducer(scope.initialState, {});

            expect(state).to.deep.equal(scope.initialState);
        });
    });

    describe('when setting the network to connection state', () => {
        it('should not set the connection state when the input type is not a boolean', () => {
            const state = networkReducer(scope.initialState, { type: SET_NETWORK_CONNECTION_STATE, state: 'true' });

            expect(state.isConnected).to.equal(scope.initialState.isConnected);
        });

        it('should set the network to true when it is false', () => {
            let state;

            scope.initialState.isConnected = false;
            state = networkReducer(scope.initialState, { type: SET_NETWORK_CONNECTION_STATE, state: true });

            expect(state.isConnected).to.be.true;
        });

        it('should set the network to true when it is already true', () => {
            let state;

            scope.initialState.isConnected = true;
            state = networkReducer(scope.initialState, { type: SET_NETWORK_CONNECTION_STATE, state: true });

            expect(state.isConnected).to.be.true;
        });

        it('should set the network to false when it is true', () => {
            let state;

            scope.initialState.isConnected = true;
            state = networkReducer(scope.initialState, { type: SET_NETWORK_CONNECTION_STATE, state: false });

            expect(state.isConnected).to.be.false;
        });

        it('should set the network to false when it is already false', () => {
            let state;

            scope.initialState.isConnected = false;
            state = networkReducer(scope.initialState, { type: SET_NETWORK_CONNECTION_STATE, state: false });

            expect(state.isConnected).to.be.false;
        });
    });
});
