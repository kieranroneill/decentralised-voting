import PropTypes from 'prop-types';
import React from 'react';

// Styles.
import './styles.scss';

const NetworkStatus = props => {
    let indicatorClassNames = ['network-status__indicator'];

    if (props.isConnected) {
        indicatorClassNames.push('network-status__indicator--is-connected');
    }

    return (
        <div className="network-status">
            <div className={ indicatorClassNames.join(' ') } />
        </div>
    );
};

NetworkStatus.propTypes = {
    isConnected: PropTypes.bool.isRequired
};

export default NetworkStatus;
