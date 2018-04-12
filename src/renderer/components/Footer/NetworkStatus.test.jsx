import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { assert } from 'sinon';

// Mocks.
import Web3 from '../../../../test/mocks/web3Mock';

// Component.
import NetworkStatus from './NetworkStatus';

describe('<NetworkStatus />', () => {
    const scope = {
        wrapper: null
    };

    beforeEach(() =>  {
        window.web3 = new Web3();

        scope.wrapper = shallow(<NetworkStatus />);
    });

    afterEach(() => {
        scope.wrapper = null;
    });

    describe('when the component mounts', () => {
        it('should set the state based on the network connection', () => {
            assert.calledOnce(window.web3.isConnected);
        });

        it('should display the connected text', () => {
            scope.wrapper.setState({
                isConnected: true
            });

            expect(scope.wrapper.childAt(1).children().text()).contains('Network is connected');
        });

        it('should not have the applied class name for when the network is not connected', () => {
            scope.wrapper.setState({
                isConnected: false
            });

            expect(scope.wrapper.childAt(1).children().text()).contains('Network is disconnected');
        });
    });
});
