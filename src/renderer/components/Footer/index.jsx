import React from 'react';

// Config.
import defaults from '../../../common/defaults';

// Components.
import NetworkStatus from './NetworkStatus';

const Footer = () => (
    <footer>
        <NetworkStatus isConnected={ false }/>
        <p>
            { 'Made with <3 by '}
            <a
                href={ defaults.gitHubProfileLink }
                target="_blank">
                { 'Kieran O\'Neill' }
            </a>
        </p>
    </footer>
);

export default Footer;
