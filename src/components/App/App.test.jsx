import { expect } from 'chai';
import { mount, shallow  } from 'enzyme';
import React from 'react';
import { default as Web3 } from 'web3';

// Component.
import App from './App';

describe('components/App', () => {
    const scope = {
        wrapper: null
    };
    const web3Host = 'http://localhost:8545';

    beforeEach(() => {
        window.web3 = new Web3(new Web3.providers.HttpProvider(web3Host)); // Using Ganache client.

        scope.wrapper = shallow(<App />);
    });

    afterEach(() => {
        window.web3 = null;

        scope.wrapper =  null;
    });

    describe('when the component mounts', () => {
        it('should have the correct default props', () => {
            const wrapper = mount(<App />);

            expect(wrapper.props().isNetworkRunning).to.equal(false);
        });

        it('should have the correct default private properties', () => {
            const instance = scope.wrapper.instance();

            expect(instance).to.have.property('ballotContract');
            expect(instance.ballotContract).to.equal(null);
        });
    });
});
