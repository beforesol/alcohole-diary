const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const commonCSSLoaderOptions = {
  importLoaders: 2,
  url: false
};

const cssLoaderOptions = {
  ...commonCSSLoaderOptions,
  modules: false
};

const scssLoaderOptions = {
  ...commonCSSLoaderOptions,
  modules: true,
  localIdentName: '[name]_[local]--[hash:base64:5]'
};

const postCSSLoaderOptions = {
  ident: 'postcss',
  plugins: () => [autoprefixer(),],
};

module.exports = {
  entry: ['./src/index.tsx', './assets/css/common.css'],
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@cores': path.resolve(`./src/cores`),
      '@utils': path.resolve('./src/utils'),
      '@hooks': path.resolve('./src/hooks'),
      '@reducers': path.resolve('./src/reducers'),
      '@pages': path.resolve('./src/pages'),
      '@components': path.resolve('./src/components'),
      '@config': path.resolve('./src/config'),
      '@modules': path.resolve('./src/modules'),
      '@api': path.resolve('./src/api'),
      '@constants': path.resolve('./src/constants'),
      '@modules': path.resolve('./src/modules'),
      '@assets': path.resolve('./assets'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'scss']
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{ loader: 'ts-loader' },]
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: cssLoaderOptions },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: scssLoaderOptions },
          { loader: 'postcss-loader', options: postCSSLoaderOptions },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};
