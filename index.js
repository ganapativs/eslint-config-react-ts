module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["import", "prettier", "react-hooks"],
  env: {
    browser: true,
    es6: true,
    node: false,
    mocha: false
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        printWidth: 80,
        trailingComma: "all",
        jsxBracketSameLine: true
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // https://github.com/benmosher/eslint-plugin-import/issues/1558#issuecomment-563222416
    "import/extensions": [
      "error",
      "always",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never"
      }
    ],
    // note you must disable the base rule as it can report incorrect errors
    // https://github.com/typescript-eslint/typescript-eslint/issues/2540#issuecomment-692505191
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"]
  },
  globals: {}
};
