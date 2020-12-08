module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'security',
    'prettier',
    'jest',
    'jest-formatting',
    'jsdoc',
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:security/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-cycle': 'off',
    'no-await-in-loop': 'off',
    'no-param-reassign': 'off',
    'no-console': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'jsdoc/require-description': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-syntax': 'error',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-expressions': 'off'
  },
};
