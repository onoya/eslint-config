module.exports = {
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    // Possible errors
    'no-async-promise-executor': 'warn',
    'no-console': 'off',
    'no-extra-boolean-cast': 'off',
    'no-template-curly-in-string': 'error',

    // Best Practices
    curly: 'error',
    // 'default-param-last': 'error', /* Needs eslint 6.4 higher */
    'dot-location': ['error', 'property'],
    'no-case-declarations': 'off',
    'no-useless-catch': 'off',

    // Styles
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    camelcase: ['error', {
      ignoreDestructuring: true,
    }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true,
    }],
    indent: ['error', 2, {
      // For some reason, `flatTernaryExpressions` option is not working..
      flatTernaryExpressions: true,
      ignoredNodes: ['ConditionalExpression'],
      SwitchCase: 1,
    }],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'max-len': ['error', {
      code: 90,
      ignoreComments: true,
      ignoreTemplateLiterals: true,
    }],
    'new-parens': ['error'],
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 4,
    }],
    'no-lonely-if': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': ['error', {
      ignoreRestSiblings: true,
    }],
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    semi: 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {
      allowTemplateLiterals: true,
    }],
    'space-before-blocks': 'error',
    'space-in-parens': 'error',
    'switch-colon-spacing': 'error',

    // ES6
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'no-duplicate-imports': ['error', {
      includeExports: true,
    }],
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error'],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: true,
    }],
    'template-curly-spacing': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        camelcase: 'off',
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        semi: 'off',
        '@typescript-eslint/naming-convention': ['error',
          {
            "selector": "default",
            "format": ["camelCase"]
          },
          {
            "selector": "variable",
            "format": ["camelCase", "PascalCase", "UPPER_CASE"]
          },
          {
            "selector": "function",
            "format": ["camelCase", "PascalCase"]
          },
          {
            "selector": "property",
            "format": ["camelCase", "PascalCase", "snake_case"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "parameter",
            "format": ["camelCase", "PascalCase"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "method",
            "format": ["camelCase", "UPPER_CASE"]
          },
          {
            "selector": "enumMember",
            "format": ["PascalCase"]
          },
          {
            "selector": "typeLike",
            "format": ["PascalCase"]
          }
        ],
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-unused-vars': ['error', {
          ignoreRestSiblings: true,
        }],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
      },
    }
  ],
};
