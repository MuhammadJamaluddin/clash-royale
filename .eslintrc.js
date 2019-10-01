module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "linebreak-style": ["error", "windows"],
    "no-console": "off",
    "no-underscore-dangle": 'off',
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "jest": true,
  },
};
