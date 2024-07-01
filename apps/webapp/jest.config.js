const getJestProjectConfig = require('../../jest.config.ut').getJestProjectConfig;

/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  ...getJestProjectConfig(__dirname, true),
  displayName: require('./package.json').name,
  testPathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/.*/templates/.*',
    '\\.it\\.spec\\.ts$'
  ]
};

