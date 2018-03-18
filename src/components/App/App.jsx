import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { default as contract } from 'truffle-contract';

// Styles.
import './styles.scss';

// Artifacts.
//import ballotArtifacts from '../../../build/contracts/Ballot.json';

// Components.
import CandidateTable from '../CandidateTable/CandidateTable';

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
            <div>
                <h1 className="app-header">Hello World!</h1>
                <CandidateTable />
                <p>{ (this.props.isNetworkRunning ? 'Network connected!': 'Network not connected!') }</p>
            </div>
        );
    }
}
