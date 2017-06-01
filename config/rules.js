'use strict'

const babel = {
  test: /\.js$/,
  exclude: [/node_modules/],
  use: ['babel-loader']
}

const linter = {
  test: /\.js$/,
  exclude: [/node_modules/],
  loader: "eslint-loader"
}

const rules = [babel, linter]

module.exports = {
  babel,
  linter,
  rules
}
