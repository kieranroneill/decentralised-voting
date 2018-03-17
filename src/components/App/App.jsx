import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Styles.
import './styles.scss';

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
                <p>{ (this.props.isNetworkRunning ? 'Network connected!': 'Network not connected!') }</p>
            </div>
        );
    }
}
