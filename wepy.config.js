module.exports = {
  compilers: {
    pug: {},
    less: {},
    babel: {
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties'
      ]
    }
  }
}
