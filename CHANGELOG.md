# @polinom.io/eslint-config Changelog

## [1.0.0] - 2026-11-20

### Changed

- **Breaking:** ESLint flat config; requires ESLint ^9.22 || ^10 and Node.js 20+.
- **Breaking:** replaced `eslint-config-standard` and its plugins with `neostandard`.
- Jest rules (eslint-plugin-jest 29) scoped to test files.
- Dev tooling: husky 9, lint-staged 17, prettier 3; fixed recursive `npm test`.

### Removed

- Stray `MyGlobal` global and the conflicting `ecmaVersion: 2018` setting.

## [0.0.4] - 2019-11-10

### Added

- Added Jest plugin by [@mespinozas](https://github.com/mespinozas).

## [0.0.3] - 2019-11-10

### Fixed

- Fixed missing standard dependencies by [@mespinozas](https://github.com/mespinozas).

## [0.0.2] - 2019-11-10

### Added

- Added standard dependencies by [@mespinozas](https://github.com/mespinozas).

## [0.0.1] - 2019-11-10

### Added

- First configuration version by [@mespinozas](https://github.com/mespinozas).
