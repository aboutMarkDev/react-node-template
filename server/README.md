# Node.js + TS Template

A node.js starter template with:

- **TypeScript** for type safety and improved developer experience.
- **ESLint & Prettier** for consistent code quality and automatic formatting.
- **Alias Configuration** for cleaner and more maintainable import paths.

### Installation

#### 1. Create new node project.

```bash
npm init -y
```

#### 2. Install TypeScript.

- **typescript**: provides the tsc compiler to transpile TypeScript (.ts) files to JavaScript (.js) for use in Node.js.

<!-- - **ts-node**: used to compile and run TypeScript files directly in Node.js without needing to manually transpile them first. Ideal for development, scripting, or quick testing. -->

- **tsx**: a modern, fast runtime for running TypeScript files in Node.js. Commonly used with the --watch flag for automatic reloading on file changes—like nodemon, but built-in.

- **@types/node**: provides type definitions for Node.js built-in modules (like fs, path, etc.), enabling proper type checking and IntelliSense in TypeScript.

```bash
npm install -D typescript ts-node tsx @types/node
```

#### 3. (Optional) Configure alias paths e.g.(@/utils).

- **tsconfig-paths**: a runtime helper used with ts-node to resolve path aliases defined in tsconfig.json. It ensures that imports like @utils/index work when running TypeScript files directly (e.g., in development or testing).

- **tsc-alias**: a post-processing tool used after compiling with tsc. It scans the compiled .js files and replaces TypeScript path aliases (like @utils/index) with relative paths that Node.js can understand.

```bash
npm install -D tsconfig-paths tsc-alias
```

#### 4. Install and setup Prettier and ESLint.

Install the following packages:

- **prettier**: code formatter that automatically enforces consistent code style (e.g. spacing, quotes, semicolons) across your project, independent of ESLint.

- **eslint-config-prettier**: an ESLint configuration that disables formatting-related ESLint rules which might conflict with Prettier, ensuring both tools don’t fight each other.

- **eslint-plugin-prettier**: an ESLint plugin that runs Prettier as an ESLint rule (prettier/prettier), allowing Prettier formatting issues to appear as ESLint errors or warnings in your code editor or CI.

```bash
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

Include this default settings on **.prettierrc**:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100
}
```

Install eslint and its required packages such as:

- **eslint**: a linting engine that analyzes your code for potential issues based on defined rules.

- **@eslint/js**: official ESLint config presets (like eslint:recommended) as a standalone package, used in ESLint’s flat config setup.

- **globals**: provides a list of global variables to help ESLint recognize built-in environments like Node.js or browsers.

- **typescript-eslint**: a set of tools and configurations that allow ESLint to understand and lint TypeScript code, including parser and recommended rules.

using this command:

```bash
npm init @eslint/config@latest
```

After that it will ask you several questions. And it will create a eslint.config.{js,mjs} file in your directory.

So far, this is the configuration setup I think was good.

```ts
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
    rules: {
      'prettier/prettier': 'off',
    },
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
]);
```
