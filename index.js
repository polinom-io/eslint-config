'use strict';

const neostandard = require('neostandard');
const jest = require('eslint-plugin-jest');
const globals = require('globals');

module.exports = [
  ...neostandard({ semi: true, noJsx: true }),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: { ...globals.node }
    },
    rules: {
      '@stylistic/space-before-function-paren': [
        'error',
        { anonymous: 'always', named: 'never', asyncArrow: 'always' }
      ]
    }
  },
  {
    files: ['**/*.{test,spec}.{js,cjs,mjs}', '**/__tests__/**'],
    ...jest.configs['flat/recommended']
  }
];
