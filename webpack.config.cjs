const path = require("node:path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const root = __dirname;

module.exports = (_environment, arguments_) => ({
  mode: arguments_.mode || "development",
  entry: path.join(root, "src/main.tsx"),
  output: {
    path: path.join(root, "dist"),
    filename: "assets/[name].[contenthash].js",
    publicPath: "auto",
    clean: true
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: { loader: "ts-loader", options: { transpileOnly: true } }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "assets/[name].[contenthash].css" }),
    new HtmlWebpackPlugin({
      template: path.join(root, "src/template.html"),
      filename: "index.html",
      title: "一起提前退休｜互联网人互助社群",
      chunks: ["main"],
      publicPath: "./"
    }),
    new HtmlWebpackPlugin({
      template: path.join(root, "src/template.html"),
      filename: "ali/index.html",
      title: "一起提前退休｜互联网人互助社群",
      chunks: ["main"],
      publicPath: "../"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(root, "404.html"), to: "404.html" },
        { from: path.join(root, ".nojekyll"), to: ".nojekyll" },
        { from: path.join(root, "wxpic.png"), to: "wxpic.png" },
        { from: path.join(root, "assets", "content-data.js"), to: "assets/content-data.js" },
        { from: path.join(root, "assets", "ai-boundary.png"), to: "assets/ai-boundary.png" },
        { from: path.join(root, "assets", "hk-ipo-july.png"), to: "assets/hk-ipo-july.png" },
        { from: path.join(root, "assets", "china-ai.png"), to: "assets/china-ai.png" },
        { from: path.join(root, "assets", "ipo-review.png"), to: "assets/ipo-review.png" }
      ]
    })
  ],
  devServer: {
    port: 8774,
    static: { directory: path.join(root, "dist") },
    hot: true,
    open: false
  }
});