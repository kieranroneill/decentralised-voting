import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
//import { default as contract } from 'truffle-contract';

// Artifacts.
//import ballotArtifacts from '../../../build/contracts/Ballot.json';

// Components.
import CandidateTable from './components/CandidateTable/index';
import Footer from './components/Footer/index';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default class App extends Component {
    static defaultProps = {
        isNetworkRunning: false
    };
    static propTypes = {
        isNetworkRunning: PropTypes.bool
    };

    constructor() {
        super();

        this.ballotContract = null;
    }

    render() {
        return (
            <Wrapper>
                <CandidateTable />
                <Footer />
            </Wrapper>
        );
    }
}
