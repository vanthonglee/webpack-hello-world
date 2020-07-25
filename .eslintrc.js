module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'error',
  },
  extends: ['airbnb-base'],
};
