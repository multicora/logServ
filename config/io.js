'use strict'

const { paths: { src, dist } } = require('./paths')

const entry = {
  index: ['babel-polyfill', src('index')],
  lib: ['babel-polyfill', src('lib')]
}

const output = {
  path: dist(),
  filename: '[name].js'
}

module.exports = { entry, output }
