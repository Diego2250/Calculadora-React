module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'semi':['error','never'],
    "no-use-before-define": ["error", {
      "functions": true,
      "classes": true,
      "variables": false,
      "allowNamedExports": true
  }]
  },
};
