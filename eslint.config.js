// eslint.config.js
module.exports = [
  {
    files: ["*.ts"],
    ignores: ["projects/**/*"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      "@angular-eslint": require("@angular-eslint/eslint-plugin"),
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: false,
        },
      ],
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "off",
        {
          accessibility: "explicit",
        },
      ],
      "@typescript-eslint/no-inferrable-types": "off",
      "arrow-parens": [
        "error",
        "as-needed",
        {
          requireForBlockBody: true,
        },
      ],
      "brace-style": ["off", "off"],
      "import/order": "off",
      "max-len": [
        "error",
        {
          ignorePattern: "^import |^export | implements",
          code: 180,
        },
      ],
      "no-underscore-dangle": "off",
      "object-shorthand": "off",
      "quote-props": ["error", "consistent"],
      quotes: ["error", "single"],
    },
  },
  {
    files: ["*.html"],
    plugins: {
      "@angular-eslint/template": require("@angular-eslint/eslint-plugin-template"),
    },
    rules: {
      ...require("@angular-eslint/eslint-plugin-template").configs.recommended
        .rules,
      ...require("@angular-eslint/eslint-plugin-template").configs.accessibility
        .rules,
    },
  },
  {
    files: ["*.scss", "*.css"],
    ignores: ["*inline-template-*.component.html"],
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      indent: "off",
      "max-len": ["error", { code: 200 }],
      "no-console": "warn",
      "no-underscore-dangle": ["warn", { allow: ["_id"] }],
      "@typescript-eslint/no-unused-vars": ["error", { args: "none" }],
      "prettier/prettier": [
        "error",
        {
          parser: "angular",
        },
      ],
    },
  },
];
