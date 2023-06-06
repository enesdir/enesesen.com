/**
 * @file Prettier Configuration
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://prettier.io/docs/en/options.html
 * @see https://github.com/rx-ts/prettier/tree/master/packages/sh
 */

/** @type {import('prettier').Config} */
module.exports = {
  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-jsdoc'],
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};
