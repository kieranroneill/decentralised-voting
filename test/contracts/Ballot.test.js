// Contracts.
const Ballot = artifacts.require('../../src/contracts/Ballot.sol');

contract('Ballot', async () => {
    const candidates = ['0000', '1111', '2222'];
    const scope = {
        contract: null
    };

    beforeEach(async () => {
        scope.contract = await Ballot.new(candidates, { gas: 300000 });
    });

    afterEach(() => {
        scope.contract = null;
    });

    context('isCandidateValid()', async () => {
        it('should return an invalid candidate', async () => {
            const result = await scope.contract.isCandidateValid('Donald Trump');

            expect(result).to.be.false;
        });

        it('should return a valid candidate', async () => {
            const result = await scope.contract.isCandidateValid('0000');

            expect(result).to.be.true;
        });
    });

    context('vote()', async () => {
        it('should throw and error if the candidate is invalid', async () => {
            let error;

            try {
                await scope.contract.vote('Donald Trump');
            } catch(err) {
                error = err;
            }

            expect(error).to.be.an.instanceof(Error);
        });

        it('should attempt to vote for a valid candidate', async () => {
            const currentVotesTotal = await scope.contract.votes(candidates[0]);
            let newVotesTotal;

            await scope.contract.vote(candidates[0]);

            newVotesTotal = await scope.contract.votes(candidates[0]);

            expect(newVotesTotal.toNumber()).to.equal((currentVotesTotal.toNumber() + 1));
        });
    });
});
