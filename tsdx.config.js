const postcss = require('rollup-plugin-postcss');
const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      url(),
      svgr(),
      postcss({
        module: true,
        inject: true,
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};
