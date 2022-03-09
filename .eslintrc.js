module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
    ],
    // "rules": {
    //   "react/react-in-jsx-scope": 0,
    //   // 允许空接口
    //   "@typescript-eslint/no-empty-interface": 0,
    //   // 允许any类型
    //   "@typescript-eslint/no-explicit-any": 0,
    //   "@typescript-eslint/no-inferrable-types": 0
    // }
    rules: {
      "react/display-name": 0,
      "arrow-parens": ["error", "as-needed"],
      "react/react-in-jsx-scope": 0,
      // 允许空接口
      "@typescript-eslint/no-empty-interface": 0,
      // 允许any类型
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-inferrable-types": 0,


      'react/jsx-wrap-multilines': 0,
      'react/prop-types': 0,
      'react/forbid-prop-types': 0,
      'react/jsx-one-expression-per-line': 0,
      'generator-star-spacing': 0,
      'function-paren-newline': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'linebreak-style': 0,
      // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
      'no-prototype-builtins': 'off',
      'import/prefer-default-export': 'off',
      'import/no-default-export': [0, 'camel-case'],
      // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
      'react/destructuring-assignment': 'off',
      'react/jsx-filename-extension': 'off',
      // Use function hoisting to improve code readability
      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      // Makes no sense to allow type inferrence for expression parameters, but require typing the response
      '@typescript-eslint/explicit-function-return-type': [
          'off',
          { allowTypedFunctionExpressions: true },
      ],
      '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: true, variables: true, typedefs: true },
      ],
      '@typescript-eslint/no-var-requires': 0,
      'unicorn/prevent-abbreviations': 'off',
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/interface-name-prefix': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      'import/no-cycle': 0,
      'react-hooks/exhaustive-deps': 'off',
      // Conflict with prettier
      'arrow-body-style': ['error', 'as-needed'],
      'object-curly-newline': 0,
      'implicit-arrow-linebreak': 0,
      'operator-linebreak': 0,
      'no-param-reassign': 1,
      'space-before-function-paren': 0,
  },
  settings: {
      // support import modules from TypeScript files in JavaScript files
      'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
      polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
}
