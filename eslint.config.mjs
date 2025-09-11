import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default tseslint.config(
  { ignores: ['dist/**', 'node_modules/**', '.next/**', 'build/**', 'next-env.d.ts'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      importPlugin.flatConfigs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      reactHooks.configs['recommended-latest'],
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-refresh': reactRefresh,
      '@next/next': nextPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-magic-numbers': ['error', { ignore: [0, 1, 8] }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      ...nextPlugin.configs.recommended.rules,
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
      },
      next: {
        rootDir: import.meta.dirname,
      },
    },
  }
);
