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
  plugins: ['import', 'qunar'],
  settings: {
    'import/parser': 'babel-eslint',
    'import/resolve': {
      moduleDirectory: ['node_modules', 'src']
    }
  },
  rules: {
    // 要求行尾分号
    semi: 2,
    // 函数复杂度
    complexity: 0,
    // 缩进空格数
    indent: [2, 2, { SwitchCase: 1 }],
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/named': 0,
    'import/namespace': 0,
    // 检查依赖文件是否存在（文件名区分大小写）
    'import/no-unresolved': [2, { caseSensitive: true }],
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    // 强制对象的最后一项不能有逗号
    'comma-dangle': [2, 'never'],
    'no-alert': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    // 禁用自增/自减
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-warning-comments': 0,
    // 强制 eslint-disable 后必须跟具体规则名称
    'qunar/no-abusive-eslint-disable': 2,
    // 强制要求数组长度做比较运算
    'qunar/explicit-length-check': 2
  }
};
