const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const version = require("../package.json").version;
const banner =
  "/**\n" +
  " * angular-demo v" + version + "\n" +
  " * https://github.com/Dreampie/angular2-demo\n" +
  " * Released under the MIT License.\n" +
  " */\n";

module.exports = [
  {
    devServer: {
      contentBase: 'dist',
      hot: true,
      historyApiFallback: true,
      inline: true,
      port: 80
    },
    devtool: 'source-map',
    debug: true,
    entry: {
      app: "./src/main"
    },
    output: {
      publicPath: "/",
      path: "./dist/assets/js",
      filename: "[name].min.js"
    },
    module: {
      loaders: [
        {test: /\.less/, loader: 'style!css!less'},
        {test: /\.html$/, loader: "html"},
        {test: /\.ts/, loader: 'ts'},
        {test: /\.(eot|svg|ttf)$/, loader: "file"},
        {test: /\.(png|jpg|gif)$/, loader: "url"},
        {test: /\.(woff|woff2)$/, loader: "url?limit=10000&minetype=application/font-woff"}
      ]
    },
    resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.html', '.less', '.ts']
    },
    plugins: [
      new webpack.BannerPlugin(banner, {raw: true}),
      new HtmlWebpackPlugin({inject: false, template: 'src/index.html'}),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }
];
