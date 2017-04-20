module.exports = {
  extends: ['eslint-config-airbnb', './base'].map(require.resolve),
  plugins: ['react', 'import'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
};
