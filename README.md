# Decentralised Voting System

A simple voting app built on the Ethereum network.

#### Table Of Contents

* [Requirements](#requirements)
* [Development](#development)
* [Testing](#testing)

## Requirements

In order to get started, you will need: 

* Install [Node](https://nodejs.org) (>= v8.10.0).
* Install [Yarn](https://yarnpkg.com).

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

To run the unit tests simply run:
```bash
yarn test
```
Once the tests have been completed, coverage reports will be added to a `/coverage` directory.
