import React from 'react';

// Component.
import CandidateTableRow from './CandidateTableRow';

describe('<CandidateTableRow />', () => {
    const scope = {
        props: null,
        wrapper: null
    };

    beforeEach(() =>  {
        scope.props = {
            candidate: 'Donald Duck',
            votes: 3
        };
        scope.wrapper = shallow(<CandidateTableRow { ...scope.props } />);
    });

    afterEach(() => {
        scope.props = null;
        scope.wrapper = null;
    });

    describe('when the component mounts', () => {
        test('should render the correct table columns', () => {
            const columns = scope.wrapper.find('td');

            expect(columns).to.have.length(2);
            expect(columns.at(0).text()).to.equal(scope.props.candidate);
            expect(columns.at(1).text()).to.equal(scope.props.votes.toString());
        });
    });
});
