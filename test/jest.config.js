module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx}',
        '!<rootDir>/src/migrations/**/*'
    ],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/test/mocks/styleMock.js'
    },
    rootDir: '..',
    roots: ['<rootDir>/src/'],
    setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',
    testEnvironmentOptions: { userAgent: 'node.js', appName: 'Netscape', language: 'en' },
    testResultsProcessor: 'jest-junit',
    verbose: true
};
