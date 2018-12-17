module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'jest-environment-jsdom',
  displayName: 'client',
  // before Jest is loaded
  // setupFiles: [],
  // after Jest is loaded
  setupTestFrameworkScriptFile: require.resolve('./setup-tests.js'),
};
