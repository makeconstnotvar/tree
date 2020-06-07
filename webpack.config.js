let path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  plugins: [],
  entry: {
    script: "./app/client.tsx"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [
      "./node_modules",
      "./app"
    ]
  },
  stats: {
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    reasons: false,
    usedExports: false,
  },
};