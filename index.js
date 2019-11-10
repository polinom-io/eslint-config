module.exports = {

  globals: {
    MyGlobal: true
  },

  rules: {
    "semi": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ]
  }
};