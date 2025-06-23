# React + Vite + TS Template

A react starter template with:

- **Vite** for fast development.
- **TypeScript** for better type-safety.
- **ESLint Support** (included when installing react+vite) for better catching errors in development.
- **TailwindCSS** for utility-first styling.
- **Prettier with Tailwind plugin** for consistent class name ordering.
- **Alias Configuration e.g.(@)** for cleaner imports.

### Installation

#### 1. Create new React + Vite + TS project.

```bash
npm create vite@latest
```

#### 2. Install and setup TailwindCSS.

Follow the official Tailwind Installation Guide here: **[Installing TailwindCSS with Vite](https://tailwindcss.com/docs/installation/using-vite)**.

#### 3. Install and setup Prettier.

- Install Prettier and the Tailwind Plugin as dev dependencies.

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

- Create a config file for prettier **e.g.(.prettierrc.json or .prettierrc)**. And add this custom configuration.

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "singleQuote": true,
  "jsxSingleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "semi": true,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

- (Optional) Create a file for prettier to tell which files or directories should be ignore when formatting the code. **e.g.(.prettierignore)**. Sample directories/specific files:

```nginx
node_modules
dist
build
```

#### 4. Configure path alias.

- Modify the **tsconfig.app.json** file, sample:

```json
{
  "compilerOptions": {
    // other configurations ^^
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

- Install **vite-tsconfig-paths** as dev dependency.

```bash
npm install -D vite-tsconfig-paths
```

- Update the **vite.config.ts** file:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
```
