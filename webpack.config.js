var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  vue: {
    loaders: {
      js: 'buble-loader'
    }
  },
  module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        { 
          test: /\.vue$/,loader: 'vue-loader',
           options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                loader: 'css-loader',
                fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
              })
            }
          }
        },
      ]
  },
  plugins: [
     new ExtractTextPlugin("style.css")
  ]
}