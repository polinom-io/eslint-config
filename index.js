module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    MyGlobal: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    semi: [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
};
