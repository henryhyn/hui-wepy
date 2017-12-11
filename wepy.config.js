const path = require('path');

// 定义源码和构建结果的路径
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

const config = {
  resolve: {
    extensions: ['.js', '.wpy'],
    alias: {
      '@': SRC_PATH
    }
  },
  eslint: true,
  compilers: {
    pug: {},
    less: {
      compress: true
    },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions'
      ]
    }
  }
};

if (process.env.NODE_ENV === 'production') {
  delete config.compilers.babel.sourceMap;

  config.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {}
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  };
}

module.exports = config;
