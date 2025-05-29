module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.optimization.splitChunks = {
        minSize: 20000,
      };
      return webpackConfig;
    },
  },
};