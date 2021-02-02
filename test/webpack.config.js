const path = require('path');

module.exports = {
    entry: './test/data/song.js',
    output: {
        path: __dirname,
        filename: "bundle.test.js"
    },
    mode: "none",
    module:
    {
      rules: [
        {
          test: /\.ttf$/,
          use: [
            {
              loader: 'ttf-loader',
              options: {
                name: './font/[hash].[ext]',
              },
            },
          ]
        }
      ]
    }
  }
};
