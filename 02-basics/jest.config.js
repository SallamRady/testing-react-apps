module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/02-basics/node_modules/(?!@bundled-es-modules|msw|statuses).+\\.js$",
  ],
};
