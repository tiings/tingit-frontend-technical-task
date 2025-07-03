import eslint from "@eslint/js"
import globals from "globals"
import prettier from "eslint-config-prettier"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import pluginQuery from "@tanstack/eslint-plugin-query"
import reactCompiler from "eslint-plugin-react-compiler"
import reactX from "eslint-plugin-react-x"
import react from "eslint-plugin-react"
import { globalIgnores } from "eslint/config"
import stylisticJSX from "@stylistic/eslint-plugin-jsx"
import unicorn from "eslint-plugin-unicorn"

export default tseslint.config(
  globalIgnores(["**/vite-env.d.ts", "dist", "dev-dist"]),
  {
    extends: [
      reactX.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      eslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.builtin },
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    plugins: {
      unicorn,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react-compiler": reactCompiler,
      "@stylistic/jsx": stylisticJSX
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/prop-types": "off",
      "react/jsx-boolean-value": "error",
      "react-hooks/exhaustive-deps": "off",
      "react-compiler/react-compiler": "error",
      "react-x/no-unstable-context-value": "off",
      "@stylistic/jsx/jsx-curly-brace-presence": "error",
      "@stylistic/jsx/jsx-newline": ["error", { prevent: true, allowMultilines: false }],
      "@stylistic/jsx/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: true,
          reservedFirst: true
        }
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-expressions": ["error", { allowShortCircuit: true }],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "no-restricted-imports": ["error", { patterns: ["../../*"] }],
      "spaced-comment": ["error", "always"],
      "no-multi-spaces": "error",
      "arrow-body-style": ["error", "as-needed"],
      "unicorn/no-array-reduce": "error",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "no-underscore-dangle": "error",
      "no-implicit-coercion": ["error", { allow: ["!!"] }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "never", prev: "import", next: "import" },
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "directive", next: "*" },
        { blankLine: "always", prev: "block", next: "block" },
        { blankLine: "always", prev: "function", next: "function" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] }
      ]
    }
  },
  {
    plugins: {
      react
    },
    ignores: ["**/components/ui/**/*.{ts,tsx}"],
    files: ["**/components/**/*.{ts,tsx}"],
    rules: {
      "react/function-component-definition": [
        "error",
        { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }
      ]
    }
  },
  ...pluginQuery.configs["flat/recommended"],
  prettier
)
