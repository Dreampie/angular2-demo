const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const version = require("../package.json").version;
const banner =
  "/**\n" +
  " * angular2-demo v" + version + "\n" +
  " * https://github.com/Dreampie/angular2-demo\n" +
  " * Released under the MIT License.\n" +
  " */\n";

module.exports = [
  {
    entry: {
      main: "./src/main"
    },
    output: {
      publicPath: "/",
      path: "./dist",
      filename: "assets/js/[name].min.js"
    },
    module: {
      loaders: [
        {test: /\.css$/, loader: "style!css"},
        {test: /\.less$/, loader: "style!css!less"},
        {test: /\.html$/, loader: "html"},
        {test: /\.tsx?$/, loader: "ts"},
        {test: /\.(eot|svg|ttf)$/, loader: "file"},
        {test: /\.(png|jpg|gif)$/, loader: "url"},
        {test: /\.(woff|woff2)$/, loader: "url?limit=10000&minetype=application/font-woff"}
      ]
    },
    resolve: {
      modulesDirectories: ["node_modules"],
      extensions: ["", ".ts", ".tsx", ".html", ".css", ".less", ".js", ".ts", ".tsx"]
    },
    plugins: [
      new webpack.BannerPlugin(banner, {raw: true}),
      new HtmlWebpackPlugin({inject: false, template: "src/index.html"}),
      new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ]
  }
];
