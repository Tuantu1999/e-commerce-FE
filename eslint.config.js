import vuetifyConfig from 'eslint-config-vuetify/index.ts.mjs'

export default [
  ...vuetifyConfig,
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.eslintrc-auto-import.json',
    ],
  },
  {
    rules: {
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'vue/attributes-order': 'error',
      'vue/html-self-closing': 'warn',
      'vue/html-closing-bracket-newline': 'error',
      'vue/html-indent': 'error',
      'vue/script-indent': 'error',
      'sort-imports': 'error',
    },
  },
]
