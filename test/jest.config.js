module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx}'
    ],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/test/mocks/styleMock.js'
    },
    rootDir: '..',
    roots: ['<rootDir>/src/'],
    setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',
    testResultsProcessor: 'jest-junit',
    verbose: true
};
