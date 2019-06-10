class WebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('my webpack plugin', (stats) => {
      console.log(stats, 'stats');
      console.log(compiler, 'compiler');
    })
  }
}

module.exports = WebpackPlugin;