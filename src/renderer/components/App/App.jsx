import PropTypes from 'prop-types';
import React, { Component } from 'react';
//import { default as contract } from 'truffle-contract';

// Styles.
import './styles.scss';

// Artifacts.
//import ballotArtifacts from '../../../build/contracts/Ballot.json';

// Components.
import CandidateTable from '../CandidateTable/CandidateTable';
import Footer from '../Footer/Footer';

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
            <div className="app">
                <CandidateTable />
                <Footer />
            </div>
        );
    }
}
