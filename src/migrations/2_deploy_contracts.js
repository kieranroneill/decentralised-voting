var ConvertLib = artifacts.require('../src/contracts/ConvertLib.sol');
var MetaCoin = artifacts.require('../src/contracts/MetaCoin.sol');

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};
