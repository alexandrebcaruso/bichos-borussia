module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/all",
        "plugin:react/jsx-runtime"
    ],
    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "eqeqeq": 2,
        "linebreak-style": ["error", "unix"],
        "no-unsafe-optional-chaining": "off",
        "one-var": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/function-component-definition": ["warn", {
            "namedComponents": "arrow-function"
        }],
        "sort-imports": "off",
    },
    settings: {
        react: {
            pragma: "React",
            version: "^18.1.0"
        }

    },
};
