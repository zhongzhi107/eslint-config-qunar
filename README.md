# Eslint-config-qunar

所有规则来源于 [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 和 [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

## 规则说明
- `indent: 2`: 使用 2 个空格缩进，和业内主流标准一致。
- `import/no-unresolved: 2`: 避免因系统对文件名大小写差异可能导致的依赖包引用失败。
- `no-unused-vars: 0`: 使用 typescript 类型时有点问题，暂时没有找到好的处理方法，先禁用。