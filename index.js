module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-recommended'
  ],
  plugins: [
    'no-only-tests'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: [
    'dist/**'
  ],
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'no-only-tests/no-only-tests': 'error',
    '@typescript-eslint/camelcase': 'off' // this is temp, see https://github.com/typescript-eslint/typescript-eslint/issues/2077
  },
  overrides: [{
    files: ['tests/**', 'src/tests/**', '*.test.ts'],
    env: { mocha: true, jest: true }
  }, {
    files: ['*.test.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off'
    }
  }]
}
