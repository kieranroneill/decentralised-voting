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
        test('should have the applied class name for when the network is connected', () => {
            const networkIndicatorNode = scope.wrapper.find('.network-status__indicator');

            expect(networkIndicatorNode.exists()).to.be.true;
            expect(networkIndicatorNode.hasClass('network-status__indicator--is-connected')).to.be.true;
        });

        test('should not have the applied class name for when the network is not connected', () => {
            let networkIndicatorNode;
            let wrapper;

            scope.props.isConnected = false;

            wrapper = shallow(<NetworkStatus { ...scope.props } />);
            networkIndicatorNode = wrapper.find('.network-status__indicator');

            expect(networkIndicatorNode.exists()).to.be.true;
            expect(networkIndicatorNode.hasClass('network-status__indicator--is-connected')).to.be.false;
        });
    });
});
