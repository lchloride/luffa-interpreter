// webpack.config.js
module.exports = {
    module: {
      rules: [
        {
          test: /\.(txt|pegjs)$/i,
          use: 'raw-loader',
        },
      ],
    },
  };