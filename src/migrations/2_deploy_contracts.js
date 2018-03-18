const Ballot = artifacts.require('../src/contracts/Ballot.sol');

module.exports = function(deployer) {
    deployer.deploy(Ballot, ['0000', '1111', '2222'], { gas: 300000 });
};
