module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'next',
  ],
  ignorePatterns: ['node_modules/', '.next/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'simple-import-sort',
    'sort-keys-fix',
    'prettier',
  ],
  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always',
        jpeg: 'always',
        jpg: 'always',
        json: 'always',
        png: 'always',
        svg: 'always',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-sort-props': ['warn'],
    'react/sort-comp': ['warn'],
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'off',
    'sort-keys': 'off',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'tailwindcss/classnames-order': [
      'warn',
      {
        callees: ['cn'],
        classRegex: '^class(Name)?$', // Can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
      },
    ],
    'typescript-sort-keys/interface': 'warn',
    'typescript-sort-keys/string-enum': 'warn',
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // Node: {
      //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
      // },
      // alias: {
      //   map: [['@', './src/']],
      // },
      typescript: {
        alwaysTryTypes: true, // Always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
        // use <root>/path/to/folder/tsconfig.json
        project: ['tsconfig.json'],
      },
    },
  },
};
