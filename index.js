module.exports = {
  extends: ['eslint-config-airbnb', './base'].map(require.resolve),
  plugins: ['react'],
  env: {
    mocha: true
  },
  rules: {
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'global-require': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-dynamic-require': 0
  }
};
