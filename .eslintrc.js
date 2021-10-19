module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "eslint-config-prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "eslint-plugin-prettier",
    "prettier",
    "jsx-a11y",
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": "off",
    "no-empty": ["warn", { allowEmptyCatch: true }],
    "react/prop-types": "off",
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    eqeqeq: "error",
    "no-unused-vars": "warn",
    "global-require": "warn",
    "no-mixed-operators": "off",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
