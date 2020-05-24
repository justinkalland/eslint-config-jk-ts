# eslint-config-jk-ts
Based on the original [eslint-config-jk](https://github.com/justinkalland/eslint-config-jk), this is the same idea but for TypeScript.

The lint setup and config that I use in my TypeScript projects. Basically StandardJS with a little extra, and linting on pre-commit.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Setup
One package sets up everything needed for linting:
```
npm i eslint-config-jk-ts --save-dev
```
- Installs [eslint](https://www.npmjs.com/package/eslint)
- Installs the StandardJS eslint configs / plugins
- Installs the TypeScript esling configs / plugins
- Adds [custom rules and plugins I like](https://github.com/justinkalland/eslint-config-jk-ts/blob/master/index.js)
- Installs [husky](https://www.npmjs.com/package/husky)
- Installs [lint-staged](https://www.npmjs.com/package/lint-staged)
- [Adds](https://github.com/justinkalland/eslint-config-jk-ts/blob/master/scripts/postInstall.js) to `package.json` (if file exsists)
  - Eslint config option
  - Husky hook to lint on pre-commit
  - package script `lint` (`npm run lint`)
