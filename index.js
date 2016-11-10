module.exports = {
  "extends": [ 'eslint-config-airbnb' ].map(require.resolve),
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "react/no-multi-comp": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "comma-dangle": [2, "never"],
    "complexity": ["error", { "max": 10 }],
    "indent": [2, 2, {"SwitchCase": 1}],
    "no-console": 0,
    "no-alert": 0,
    "no-warning-comments": 2,
    "semi": 2
  },
  "plugins": [
    "react", "import"
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
