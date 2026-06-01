// Import official ESLint recommended configs, browser globals, and React-related plugins
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

// Define linting configuration options for ESLint 9+
export default defineConfig([
  // Ignore build/dist directory outputs
  globalIgnores(['dist']),
  {
    // Apply rules to all JavaScript and React JSX files
    files: ['**/*.{js,jsx}'],
    // Extend configurations from JS, React Hooks, and Vite Refresh rules
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      // Use browser environments globals (window, document, etc.)
      globals: globals.browser,
      // Enable JSX syntax support in parser options
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
