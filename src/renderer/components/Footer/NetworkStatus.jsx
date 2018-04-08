import PropTypes from 'prop-types';
import React from 'react';
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

const NetworkStatus = props => {
    let networkConnectionText = 'Network is disconnected';

    if (props.isConnected) {
        networkConnectionText = 'Network is connected';
    }

    return (
        <Wrapper>
            <Indicator isConnected={ props.isConnected } />
            <Label>{ networkConnectionText }</Label>
        </Wrapper>
    );
};

NetworkStatus.propTypes = {
    isConnected: PropTypes.bool.isRequired
};

export default NetworkStatus;
