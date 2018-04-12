import React from 'react';
import ReactDom from 'react-dom';

// Mocks.
import Web3 from '../../test/mocks/web3Mock';

// Module.
import { onWindowLoad } from './index';

// Components.
import App from './App';

describe('index', () => {
    const scope = {
        createElementStub: null,
        renderStub: null
    };
    const web3Host = 'http://to.the.web.3.0';

    beforeEach(() => {
        window.web3 = new Web3(new Web3.providers.HttpProvider(web3Host));

        scope.createElementStub = stub(React, 'createElement');
        scope.renderStub = stub(ReactDom, 'render');
    });

    afterEach(() => {
        window.web3 = null;

        scope.createElementStub.restore();
        scope.renderStub.restore();
    });

    describe('onWindowLoad()', () => {
        it('should use the current web3 instance', () => {
            onWindowLoad();

            expect(window.web3.currentProvider.host).to.equal(web3Host);
        });

        it('should use the create a new web3 instance if it is not defined', () => {
            window.web3 = null;

            onWindowLoad();

            expect(window.web3).to.not.be.null;
            expect(window.web3.currentProvider.host).to.not.equal(web3Host);
        });

        it('should create an element with to render the React app', () => {
            onWindowLoad();

            assert.calledWith(scope.createElementStub, App);
            assert.calledOnce(scope.renderStub);
        });
    });
});
