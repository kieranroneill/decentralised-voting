pragma solidity ^0.4.19;

/**
 * @title Allows you to cast a vote and read the votes for the specified candidates.
 * @author Kieran O'Neill
 */
contract Ballot {
    mapping (bytes32 => uint8) public votes;
    bytes32[] private candidateList;

    /**
     * @notice Constructor.
     * @param candidates A list of candidates who will be participating in the election.
     */
    function Ballot(bytes32[] candidates) public {
        candidateList = candidates;
    }

    /**
     * @notice Checks if the candidate is part of the ballot.
     * @param candidate The candidate to check.
     * @return A true if the candidate exists, false otherwise.
     */
    function isCandidateValid(bytes32 candidate) view public returns (bool) {
        for (uint i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == candidate) {
                return true;
            }
        }

        return false;
    }

    /**
     * @notice Votes for the specified candidate.
     * @param candidate The candidate to vote.
     * @return The number of votes for the specified candidate.
     */
    function vote(bytes32 candidate) public {
        require(isCandidateValid(candidate));

        votes[candidate] += 1;
    }
}
