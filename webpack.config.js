const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
  'src',
  'src/shrikaton-4'
];

module.exports = {
  entry: pages.reduce((acc, path) => ({
      ...acc,
      [path]: `./${path}/index.${path === 'src' ? 'html' : 'js'}`
  }), {}),
  devServer: {
    contentBase: './public'
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
    }, {})
  ]
};
