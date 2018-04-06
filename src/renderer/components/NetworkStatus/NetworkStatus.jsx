import PropTypes from 'prop-types';
import React from 'react';

// Styles.
import './styles.scss';

const NetworkStatus = props => {
    const indicatorClassNames = ['network-status__indicator'];
    let networkConnectionText = 'Network is disconnected';

    if (props.isConnected) {
        indicatorClassNames.push('network-status__indicator--is-connected');
        networkConnectionText = 'Network is connected';
    }

    return (
        <div className="network-status">
            <div className={ indicatorClassNames.join(' ') } />
            <p className="network-status__label">{ networkConnectionText }</p>
        </div>
    );
};

NetworkStatus.propTypes = {
    isConnected: PropTypes.bool.isRequired
};

export default NetworkStatus;
