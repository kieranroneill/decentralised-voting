import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const Indicator = styled.div`
  border: 10px solid ${props => props.isConnected ? 'green' : 'red'};
  border-radius: 50%;
`;
const Label = styled.p`
   margin-left: 0.75rem;
`;

export default class NetworkStatus extends Component {
    constructor() {
        super();

        this.state = {
            isConnected: window.web3.isConnected()
        };
    }

    render() {
        let networkConnectionText = 'Network is disconnected';

        if (this.state.isConnected) {
            networkConnectionText = 'Network is connected';
        }

        return (
            <Wrapper>
                <Indicator isConnected={ this.state.isConnected } />
                <Label>{ networkConnectionText }</Label>
            </Wrapper>
        );
    }
}
