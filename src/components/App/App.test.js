import Vue from 'vue';
import { default as Web3 } from 'web3';

// Component.
import App from './App';

describe('App', () => {
    const scope = {
        vm: null
    };
    const web3Host = 'http://localhost:8545';

    beforeEach(() => {
        // Set up the Etheruem network JS API.
        window.web3 = new Web3(new Web3.providers.HttpProvider(web3Host)); // Using Ganache.

        scope.vm = new Vue(App);
    });

    afterEach(() => {
        window.web3 = null;

        scope.vm =  null;
    });

    describe('when the component initialises', () => {
        it('should have the correct data', () => {
            const data = App.data();

            expect(data).to.have.property('message');
            expect(data.message).to.equal(null);
        });
    });

    describe('when the component is mounted', () => {
        it('should add a load event listener', () => {
            const addEventListenerSpy = spy(window, 'addEventListener');

            scope.vm.$mount();

            assert.calledWith(addEventListenerSpy, 'load', scope.vm.onLoadListener);

            addEventListenerSpy.restore();
        });

        it('should update the message', () => {
            scope.vm.$mount();

            expect(scope.vm.message).to.be.a('string');
        });
    });

    describe('when the component is destroyed', () => {
        it('should remove the load event listener', () => {
            const removeEventListenerSpy = spy(window, 'removeEventListener');

            scope.vm.$destroy();

            assert.calledWith(removeEventListenerSpy, 'load', scope.vm.onLoadListener);

            removeEventListenerSpy.restore();
        });
    });

    context('onLoadListener()', () => {
        it('should not wrap the current web3 instance if it is not defined', () => {
            window.web3 = null;

            scope.vm.$mount();

            expect(window.web3).to.equal(null);
        });

        it('should wrap the current web3 instance if it is defined', () => {
            scope.vm.$mount();

            expect(window.web3.currentProvider.host).to.equal(web3Host);
        });
    });
});
