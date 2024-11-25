const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "assert": require.resolve("assert"),
    "url": require.resolve("url"),
    "querystring": require.resolve("querystring-es3"),
    "buffer": require.resolve("buffer") // 添加对 buffer 的 polyfill
  };
  
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  ]);

  return config;
};
