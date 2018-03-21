import PropTypes from 'prop-types';
import React from 'react';

const CandidateTableRow = props => (
    <tr>
        <td>{ props.candidate }</td>
        <td>{ props.votes }</td>
    </tr>
);

CandidateTableRow.propTypes = {
    candidate: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
};

export default CandidateTableRow;
