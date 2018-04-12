function HttpProvider(host, timeout, user, password) {
    this.host = host || 'http://localhost:8545';
    this.timeout = timeout || 0;
    this.user = user;
    this.password = password;

    this.isConnected = stub();
    this.prepareRequest = stub();
    this.send = stub();
    this.sendAsync = stub();
}

function Web3(provider) {
    this.currentProvider = provider;
}

Web3.providers = {
    HttpProvider: HttpProvider
};

Web3.prototype.isConnected = stub().returns(true);

export default Web3;
