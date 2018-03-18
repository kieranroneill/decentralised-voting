[![CircleCI](https://circleci.com/gh/kieranroneill/decentralised-voting/tree/master.svg?style=shield&circle-token=b2ab5eefddee064306bf606f60fb9eae19a79ee3)](https://circleci.com/ghkieranroneill/decentralised-voting/tree/master)

# Decentralised Voting System

A simple voting app built on the Ethereum network.

#### Table Of Contents

* [Requirements](#requirements)
* [Ethereum Network](#ethereum-network)
* [Development](#development)
* [Testing](#testing)

## Requirements

In order to get started, you will need: 

* Install [Node](https://nodejs.org) (>= v8.10.0).
* Install [Yarn](https://yarnpkg.com).

## Ethereum Network

The development environment and the tests will require a private blockchain network running.

On a separate process, run:

```bash
yarn start:network
```

This will start a network running on [http://localhost:8545](http://localhost:8545)

## Development

1. Install the dependencies using `yarn install`
2. Run `yarn start`
3. Navigate to [http://localhost:1337](http://localhost:1337)

## Testing

Unit testing is performed using:

* [Mocha](https://mochajs.org/) for running the tests.
* [Chai](http://chaijs.com/) for assertions.
* [Sinon](http://sinonjs.org/) for spys, stubs and mocking.
* [Istanbul](https://istanbul.js.org/) for test coverage.

To run the unit tests:

```bash
yarn test
```

Once the tests have been completed, coverage reports will be added to a `/coverage` directory.
