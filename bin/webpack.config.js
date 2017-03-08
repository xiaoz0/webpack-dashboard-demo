import Webpack from 'webpack';
import cssnano from 'cssnano';
import HappyPack from 'happypack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OpenBrowserWebpackPlugin from 'open-browser-webpack-plugin';

import _debug from 'debug';

import config from './config';

const debug = _debug('app:webpack.config');
const paths = config.utils_paths;

debug('👻 初始化 webpack 默认配置...');
const APP_ENTRY = ['babel-polyfill', 'eventsource-polyfill', paths.src('main.js')];
const webpackConfig = {
  entry: {
    app: APP_ENTRY,
  },
  output: { // 输出配置
    filename: 'app.js',
    path: paths.dist(),
    publicPath: config.public_path,
  },
  resolve: {
    root: paths.src(), // 根目录: 这样可以在内部使用时 是从 src 目录查找 不需要 ../../../ 这样的写法
    modulesDirectories: ['node_modules', paths.base('node_modules')],
    extensions: ['', '.js', '.jsx', '.json'],
  },
   module: {
    noParse: [/moment.js/], // 不解析 moment
    loaders: [{
      test: /\.(js|jsx)$/,
      // exclude: /node_modules/,
      exclude: (path) => {
        const isNpmModule = !!path.match(/node_modules/);
        return isNpmModule;
      },
      include: [
        paths.src(),
      ],
      loader: 'happypack/loader?id=babel',
    }, {
      // loader less
      test: /\.less$/,
      loader: 'style!css!less',
    }, {
      // loader sass
      test: /\.sass$/,
      loader: 'style!css!sass',
    }, {
      // loader scss
      test: /\.scss$/,
      loader: 'style!css!sass',
    }],
  },
  // 插件
  plugins: [
    new HappyPack({
      id: 'babel',
      loaders: [{
        path: paths.nodeModules('babel-loader/index.js'),
        query: `?${JSON.stringify(config.babelConfig)}`,
      }],
    }),
    new HtmlWebpackPlugin({
      template: paths.src('index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
};

export default webpackConfig;
