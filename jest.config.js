module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: "coverage",
  clearMocks: true,
  testPathIgnorePatterns: ["./dist", "./node_modules"]
};