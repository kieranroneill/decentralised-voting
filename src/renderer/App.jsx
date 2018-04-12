import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styled from 'styled-components';
//import { default as contract } from 'truffle-contract';

// Artifacts.
//import ballotArtifacts from '../../../build/contracts/Ballot.json';

// Reducers.
import reducers from './reducers';

// Components.
import CandidateTable from './components/CandidateTable';
import Footer from './components/Footer';

const store = createStore(reducers);

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default class App extends Component {
    constructor() {
        super();

        this._ballotContract = null;
    }

    render() {
        return (
            <Provider store={ store }>
                <Wrapper>
                    <CandidateTable />
                    <Footer />
                </Wrapper>
            </Provider>
        );
    }
}
