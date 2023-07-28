module.exports = {
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test|tests).[tj]s?(x)"],
  setupFiles: ["./jest.setup.js"],
};
