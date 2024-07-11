import eslintVueConfig from '@wisemen/eslint-config-vue'
import playwright from 'eslint-plugin-playwright'

export default [
  ...(await eslintVueConfig),
  {
    ignores: [
      'dist',
      'node_modules',
    ],
  },
  {
    ...playwright.configs['flat/recommended'],
    files: [
      'tests/**',
    ],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: 'tests',
      },
    },
  },
]
