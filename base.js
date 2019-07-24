module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict'
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      // 允许使用旧的装饰器语法
      // https://github.com/babel/babel-eslint/issues/662
      legacyDecorators: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  plugins: ['import', 'filenames'],
  settings: {
    'import/parser': 'babel-eslint',
    'import/resolve': {
      moduleDirectory: ['node_modules', 'src']
    }
  },
  rules: {
    semi: 2,
    complexity: 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': [2, { caseSensitive: true }],
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'never'],
    'no-alert': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-warning-comments': 0,
    'filenames/match-regex': [2, '^[a-z-]+$', true],
    'filenames/match-exported': 0,
    'filenames/no-index': 0
  }
};
