import MetaCoin from './MetaCoin.sol';

contract('MetaCoin', accounts => {
    it('should put 10000 MetaCoin in the first account', () => {
        return MetaCoin.deployed()
            .then(instance => instance.getBalance.call(accounts[0]))
            .then(balance => {
                expect(balance).to.equal(10000);
            });
    });

    it('should call a function that depends on a linked library', () => {
        let metaCoinInstance;
        let metaCoinBalance;

        return MetaCoin.deployed()
            .then(instance => {
                metaCoinInstance = instance;

                return metaCoinInstance.getBalance.call(accounts[0]);
            })
            .then(balance => {
                metaCoinBalance = balance.toNumber();

                return metaCoinInstance.getBalanceInEth.call(accounts[0]);
            })
            .then(balanceInEth => {
                expect(balanceInEth).to.equal(2 * metaCoinBalance);
            });
    });

    it('should send a coin', () => {
        const amount = 10;
        let metaCoinInstance;
        let sender = {
            account: accounts[0],
            balance: {
                start: 0,
                end: 0
            }
        };
        let receiver = {
            account: accounts[1],
            balance: {
                start: 0,
                end: 0
            }
        };

        return MetaCoin.deployed()
            .then(instance => {
                metaCoinInstance = instance;

                return metaCoinInstance.getBalance.call(sender.account);
            })
            .then(balance => {
                sender.balance.start = balance.toNumber();

                return metaCoinInstance.getBalance.call(receiver.account);
            })
            .then(balance => {
                receiver.balance.start = balance.toNumber();

                return metaCoinInstance.sendCoin(sender.account, amount, { from: sender.account });
            })
            .then(() => metaCoinInstance.getBalance.call(sender.account))
            .then(balance => {
                sender.balance.end = balance;

                return metaCoinInstance.getBalance.call(receiver.account);
            })
            .then(balance => {
                receiver.balance.end = balance;

                expect(sender.balance.end).to.equal(sender.balance.start - amount);
                expect(receiver.balance.end).to.equal(receiver.balance.start + amount);
            });
    });
});
