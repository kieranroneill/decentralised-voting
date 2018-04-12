import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

// Components.
import App from './App';
import CandidateTable from './components/CandidateTable';
import Footer from './components/Footer';

describe('components/App', () => {
    const scope = {
        wrapper: null
    };

    beforeEach(() => {
        scope.wrapper = shallow(<App />);
    });

    afterEach(() => {
        scope.wrapper =  null;
    });

    describe('when the component mounts', () => {
        it('should have the correct default private properties', () => {
            const instance = scope.wrapper.instance();

            expect(instance).to.have.property('_ballotContract');
            expect(instance._ballotContract).to.equal(null);
        });

        it('should render the correct components', () => {
            expect(scope.wrapper.find(CandidateTable).exists()).to.be.true;
            expect(scope.wrapper.find(Footer).exists()).to.be.true;
        });
    });
});
