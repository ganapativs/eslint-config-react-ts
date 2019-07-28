# Base ESLint config for react+typescript setup

Automagically add `ESLint` support to `react+typescript` setup by adding this package.

> It's **required** to have `tsconfig.json` in root folder of the project

## Install

```sh
yarn add @ganapativs/eslint-config-react-ts --dev
```

## Enable ESLint

```json
// Tell editor to use eslint config from '@ganapativs/eslint-config-react-ts'
// package.json
{
    // ...
    "eslintConfig": {
      "extends": "@ganapativs/react-ts"
    },
    // ...
}
```

## Extend ESLint config

```sh
# create `.eslintrc` in root folder of the service
# .eslintrc
{
    "extends": "@ganapativs/react-ts",
    "rules": {
        # custom rules here
    }
}
```

## Publish

```sh
# Scoped packages are private by default
npm publish --access public
```
