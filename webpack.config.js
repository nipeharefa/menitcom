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
        { test: /\.vue$/,loader: 'vue-loader' },
      ]
  }
}