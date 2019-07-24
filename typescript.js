module.exports = {
  extends: ['./base'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    jest: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
        paths: ['src']
      }
    }
  },
  rules: {
    'no-unused-vars': 0
  }
};
