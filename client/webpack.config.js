const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "public"),
    filename: "bundled.js"
  },
  devtool: "source-map",
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "public"),
    hot: true,
    historyApiFallback: { index: "index.html" }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  }
};
