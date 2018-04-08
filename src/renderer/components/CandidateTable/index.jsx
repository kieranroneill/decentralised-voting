import React, { Component } from 'react';

// Components.
import CandidateTableRow from './CandidateTableRow';

export default class CandidateTable extends Component {
    constructor() {
        super();

        this.state = {
            candidates: []
        };
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <th>Candidate</th>
                    <th>Vote</th>
                </tr>
                {
                    this.state.candidates.map(candidate => (
                        <CandidateTableRow
                            candidate={ candidate.name }
                            key={ candidate.id }
                            votes={ candidate.votes } />
                    ))
                }
                </tbody>
            </table>
        );
    }
}
