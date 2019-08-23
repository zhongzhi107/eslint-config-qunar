// eslint-disable-next-line prefer-destructuring
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
    // 使用 ts 类型时会有问题，先禁用
    'no-unused-vars': 0,
    // 规范文件命名：[a-z.-]
    'unicorn/filename-case': 2
  }
};
