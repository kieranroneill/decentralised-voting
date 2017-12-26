import Vue from 'vue';
import { default as Web3 } from 'web3';

// Contracts.
//import MetaCoin from '../../contracts/MetaCoin/MetaCoin.sol';

// Component.
import App from './App';

describe('App', () => {
    const scope = {
        vm: null
    };
    const web3Host = 'http://localhost:8545';

    beforeEach(() => {
        window.web3 = new Web3(new Web3.providers.HttpProvider(web3Host)); // Using Ganache client.

        scope.vm = new Vue(App);
    });

    afterEach(() => {
        window.web3 = null;

        scope.vm =  null;
    });

    describe('when the component initialises', () => {
        it('should have the correct default props', () => {
            expect(scope.vm.isNetworkRunning).to.equal(false);
        });

        it('should have the correct default private properties', () => {
            const data = App.data();

            expect(data).to.have.property('metaCoinContract');
            expect(data.metaCoinContract).to.equal(null);
        });
    });

    describe('when the component is mounted', () => {
        it('should not set the contract', () => {
            scope.vm.$mount();

            expect(scope.vm.metaCoinContract).to.equal(null);
        });

        it('should set the contract', () => {
            scope.vm.isNetworkRunning = true;

            scope.vm.$mount();

            expect(scope.vm.metaCoinContract).to.deep.equal(MetaCoin);
        });
    });
});
