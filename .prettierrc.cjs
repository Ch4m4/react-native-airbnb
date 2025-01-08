const importVars = {
  react: '^react$',
  FSD: [
    '^@/app/',
    '^@/widgets/',
    '^@/features/',
    '^@/entities/',
    '^@/shared/',
    '^@/',
  ],
  relative: '^(?!.*.(s)?css$)[./\w]+',
  styles: '.*.(s)?css$',
};

/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],

  printWidth: 140,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  jsxSingleQuote: false,

  importOrder: [
    importVars.react,
    '<THIRD_PARTY_MODULES>',
    ...importVars.FSD,
    importVars.relative,
    importVars.styles,
  ],
  importOrderSeparation: true,
  importOrderGroupNamespaceSpecifiers: false,
  importOrderSortSpecifiers: false,
  importOrderCaseInsensitive: false,
};
