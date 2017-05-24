module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict'
  ].map(require.resolve),
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "class-methods-use-this": 0,
    "comma-dangle": [2, "never"],
    "complexity": ["error", { "max": 10 }],
    "indent": [2, 2, {"SwitchCase": 1}],
    "no-alert": 0,
    "no-console": 0,
    "no-param-reassign": 0,
    "no-warning-comments": 2,
    "semi": 2
  },
  "plugins": [
    "import"
  ],
  "settings": {
    "import/parser": "babel-eslint",
    "import/resolve": {
      "moduleDirectory": ["node_modules", "src"]
    }
  },
  "globals": {
    "__": true
  }
};
