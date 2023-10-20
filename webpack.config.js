module.exports = function() {
  return {
    entry: {
      main: ['./index.js'],
    },
    output: {
      // This will produce a chunk without a hash in its name
      filename: () => '[name]-[contenthash].js',

      // This will produce a chunk with a hash in its name
      //filename: '[name]-[contenthash].js',

      // As a workaround for this issue, you may explicitly set chunkFilename
      //chunkFilename: '[name]-[chunkhash].js',
    },
  };
};
