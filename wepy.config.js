const config = {
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
  config.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {}
    }
  };
}

module.exports = config;
