const path = require("path");
module.exports = {
  rootDir: path.join(__dirname, "./"),
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  verbose: true,
  moduleNameMapper: {
    "^\\$lib/(.*)": "./src/lib/$1",
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
};
