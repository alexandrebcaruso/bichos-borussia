const {defaults} = require("jest-config");
const esModules = ["@firebase", "firebase"].join("|");

module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: [...defaults.moduleFileExtensions, "jsx"],
    transformIgnorePatterns: [
        `/node_modules/(?!(${esModules}|.*.mjs$))`,
    ],
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/style-mock.js",
    }
};
