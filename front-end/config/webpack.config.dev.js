
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8888,
    hot: true,
    historyApiFallback: true,
    open: true,
    disableHostCheck: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:8080/',
        changeOrigin: true
      },
    }
  },
};
