const Voting = artifacts.require('../src/contracts/Voting/Voting.sol');

module.exports = function(deployer) {
    deployer.deploy(Voting, ['Rama', 'Nick', 'Jose'], { gas: 6700000 });
};
