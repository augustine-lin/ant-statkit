module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
}
