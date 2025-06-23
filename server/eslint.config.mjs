import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  { ignores: ['node_modules', 'dist'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      parser: tseslint.parser,
      globals: globals.node,
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    // This rule should be 'error' on CI.
    rules: {
      'prettier/prettier': 'off',
    },
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
]);
