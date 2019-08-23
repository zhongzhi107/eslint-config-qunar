// eslint-disable-next-line
const original = JSON.parse(process.env.npm_config_argv).original;
const sourceDir = original.length === 3 ? original[2] : 'src';

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
        paths: [sourceDir]
      }
    }
  },
  rules: {
    'no-unused-vars': 0,
    'filenames/match-regex': [2, '^[a-z-.d]+$', true]
  }
};
