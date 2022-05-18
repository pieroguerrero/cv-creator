const webpack = require("webpack");

module.exports = function override(config, env) {
  console.log("config:", config);

  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    })
  );

  config.resolve.fallback = {
    process: require.resolve("process/browser"),
    stream: require.resolve("stream-browserify"),
    util: require.resolve("util"),
    buffer: require.resolve("buffer"),
    assert: require.resolve("assert"),
    zlib: require.resolve("browserify-zlib"),
  };

  // plugins: [
  //   new webpack.ProvidePlugin({
  //     Buffer: ["buffer", "Buffer"],
  //     process: "process/browser",
  //   }),
  // ]

  return config;
};
