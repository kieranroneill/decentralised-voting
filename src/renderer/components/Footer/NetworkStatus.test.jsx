import React from 'react';

// Component.
import NetworkStatus from './NetworkStatus';

describe('<NetworkStatus />', () => {
    const scope = {
        props: null,
        wrapper: null
    };

    beforeEach(() =>  {
        scope.props = {
            isConnected: true
        };
        scope.wrapper = shallow(<NetworkStatus { ...scope.props } />);
    });

    afterEach(() => {
        scope.props = null;
        scope.wrapper = null;
    });

    describe('when the component mounts', () => {
        it('should have the applied class name for when the network is connected', () => {
            const networkIndicatorNode = scope.wrapper.find('.network-status__indicator');

            expect(networkIndicatorNode.exists()).to.be.true;
            expect(networkIndicatorNode.hasClass('network-status__indicator--is-connected')).to.be.true;
        });

        it('should not have the applied class name for when the network is not connected', () => {
            let networkIndicatorNode;

            scope.wrapper.setProps({ isConnected: false });

            networkIndicatorNode = scope.wrapper.find('.network-status__indicator');

            expect(networkIndicatorNode.exists()).to.be.true;
            expect(networkIndicatorNode.hasClass('network-status__indicator--is-connected')).to.be.false;
        });

        it('should display the connected text', () => {
            expect(scope.wrapper.find('.network-status__label').text()).contains('Network is connected');
        });

        it('should not have the applied class name for when the network is not connected', () => {
            scope.wrapper.setProps({ isConnected: false });

            expect(scope.wrapper.find('.network-status__label').text()).contains('Network is disconnected');
        });
    });
});
