// ======================================================
// 项目基本参数配置 autho: turbo
// ======================================================
import path from 'path';
import _debug from 'debug';
import Ip from 'ip';

const LOCAL_IP = Ip.address(); // 获取本地机器的 IP 地址
const PATH_BASE = path.resolve(__dirname, '..');
const log = _debug('app:config ');
const info = _debug('app:warning ');

// ----------------------------------
// 项目目录结构
// path_base -----> 根目录
// path_src  -----> 源代码目录
// path_dist -----> 生产目录
// ----------------------------------
const config = {
  env: process.env.NODE_ENV || 'development', // 环境变量
  path_base: PATH_BASE,
  path_src: 'src',
  path_dist: 'dist',
  path_build: 'build',
  path_mock: 'mock',
  path_node_modules: 'node_modules',
  // 服务端配置
  server_host: LOCAL_IP,
  server_port: process.env.PORT || 3000,
  // 第三方包: 手动添加
  vendor: [
    'react',
    'react-redux',
    'react-router',
    'redux',
  ],
};

log('😈 加载默认配置...');
// ------------------------------------
// 获取基本路径 utility
// ------------------------------------
const base = (...args) =>
  Reflect.apply(path.resolve, null, [PATH_BASE, ...args]);
// ------------------------------------
// 编译配置
// ------------------------------------

// 获取项目路径
config.utils_paths = {
  base,
  nodeModules: base.bind(null, config.path_node_modules),
  src: base.bind(null, config.path_src),
  mock: base.bind(null, config.path_mock),
  build: base.bind(null, config.path_build),
  dist: base.bind(null, config.path_dist),
};
//
// babel config
config.babelConfig = {
  cacheDirectory: true, // 是否从缓存中读取
  plugins: [
    ['transform-runtime', {
      polyfill: false,
      regenerator: true,
    }],
    ['import', {
      libraryName: 'antd',
      style: true,
    }],
  ],
  babelrc: false, // 使用当前的配置去编译 react 代码 .babelrc 只用于 server 端
  presets: ['react', 'es2015', 'stage-0'],
  env: {
    development: {
      presets: ['react-hmre'], // 开发模式下捕获错误
      plugins: [
        ['react-transform', {
          transforms: [{
            transform: 'react-transform-catch-errors',
            imports: [
              'react',
              'redbox-react',
            ],
          }],
        }],
      ],
    },
    // production: {
    //   presets: ['react-optimize'], // 生产模式下优化 react 代码 PS: 尼玛有问题
    // },
  },
};


// 区分打包和开发配置项

export default config;
