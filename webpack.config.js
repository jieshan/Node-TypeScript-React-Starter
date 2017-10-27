const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const webpack = require("webpack");

const env = JSON.stringify(process.env.NODE_ENV || "development");
console.log("******** Target env is: " + env);

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': env
        }
    }),
    // This plugin is only required for bootstrap js
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
    }),
    // Bundle jquery, react, and react-dom together as a common plugin
    new webpack.optimize.CommonsChunkPlugin({
        name: "jqueryReact",
        minChunks: Infinity
    })
];

if (process.env.NODE_ENV === "production") {
    plugins.push(new MinifyPlugin());
}

module.exports = {
  entry: {
      home: "./src/frontend/scripts/home/home.tsx",
      jqueryReact: ["jquery", "react", "react-dom"]
  },
  output: {
    filename: "[name]Bundle.js",
    path: path.resolve(__dirname, "./dist/frontend/public")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: plugins
};
