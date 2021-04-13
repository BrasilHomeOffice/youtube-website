module.exports = {
  target: "serverless", // <- add here
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.resolve.extensions = ['.js', '.jsx'];
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
