# Polinom.io Default ESLint configuration

Shared ESLint flat config, based on [neostandard](https://github.com/neostandard/neostandard)
(the successor of `eslint-config-standard`) with semicolons and Jest rules for test files.

## Usage

Requires ESLint 9.22+ or 10 and Node.js 20+.

```sh
npm i -D eslint @polinom.io/eslint-config
```

```js
// eslint.config.js
module.exports = require('@polinom.io/eslint-config');
```

Extend it:

```js
module.exports = [
  ...require('@polinom.io/eslint-config'),
  { rules: { /* overrides */ } }
];
```

Jest rules apply to `*.test.js`, `*.spec.js` and `__tests__/`; they need `jest` installed in the
consuming project.

## Migrating from 0.x

- Delete `.eslintrc*` and the `eslintConfig` key; add `eslint.config.js` as above.
- `standard`, `node`, `promise`, `import` and `standard` plugins are replaced by neostandard
  (`n`, `promise`, `import-x`, `@stylistic`). Rename rule overrides accordingly
  (e.g. `semi` → `@stylistic/semi`, `node/*` → `n/*`).
