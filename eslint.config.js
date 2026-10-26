// Shared ESLint config for the whole monorepo (flat config format).
// eslint-plugin-react is left out: it doesn't support ESLint 10 yet, and ESLint 10
// already counts components used in JSX as "used", which was its main job here.
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['**/node_modules/', '**/dist/', '**/build/', '**/coverage/', 'design/'],
  },
  js.configs.recommended,
  {
    // Root config files (this file, later vite.config.js etc.) run in Node
    files: ['*.js', '*.mjs', '*.cjs'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['api/**/*.{js,cjs,mjs}'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['web/**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    // Vite config runs in Node, not the browser
    files: ['web/vite.config.js'],
    languageOptions: { globals: globals.node },
  },
  {
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  // Must stay last: switches off any rule that would fight Prettier's formatting
  prettier,
];
