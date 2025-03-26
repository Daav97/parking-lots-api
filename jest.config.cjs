module.exports = {
  testEnvironment: "node",
  collectCoverage: false,
  coverageDirectory: "coverage",
  testMatch: ["**/tests/**/*.test.js"],
  verbose: true,
  transform: {
    "^.+\\.js?$": "babel-jest",
  },
};
