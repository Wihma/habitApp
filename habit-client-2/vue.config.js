const path = require('path');

// vue.config.js
module.exports = {
  // options...
  outputDir: path.resolve(__dirname, "./wwwroot/dist"),
  chainWebpack: config => {
  config.module.rule('eslint').use('eslint-loader').options({
    fix: true
  })
}
}
