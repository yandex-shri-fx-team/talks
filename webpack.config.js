const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = [
  'src',
  'src/example',
  'src/shrikaton-4',
  'src/presentation'
];

module.exports = {
  entry: pages.reduce((acc, path) => ({
      ...acc,
      [path]: `./${path}/index.${path === 'src' ? 'html' : 'js'}`
  }), {}),
  devServer: {
    contentBase: './public',
    proxy: {
      '/talks': {
        target: `http://localhost:8080`,
        pathRewrite: { '^/talks': '' }
      }
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
          test: /\.geojson$/,
          use: {
              loader: 'json-loader'
          }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            }
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        use: [
            {
                loader: 'file-loader'
            }
        ]
      }
    ]
  },
  plugins: [
    ...pages.map((path) => {
        return new HtmlWebpackPlugin({
            chunks: [path],
            template: `${path}/index.html`,
            filename: path === 'src' ?
                'index.html' :
                `${path.replace('src/', '')}/index.html`
        });
    }, {}),
    new CopyWebpackPlugin([
        {
            from: 'public',
            to: '.'
        }
    ])
  ]
};
