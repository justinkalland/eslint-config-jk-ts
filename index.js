module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript'
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
    'no-only-tests/no-only-tests': 'error'
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
