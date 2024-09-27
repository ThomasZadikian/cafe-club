module.exports = {
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(react-leaflet))"],
  setupFilesAfterEnv: ["./setupTests.js"],
  preset: 'ts-jest',
  testEnvironment: 'node'
};
