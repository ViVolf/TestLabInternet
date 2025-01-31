const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), //output
    filename: "bundle.js", //bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  devServer: {
    port: 3030, //port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, //styles
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg)$/, //images
        /*loader: "url-loader",
        options: {
          limit: false,
          name: 'images/[name].[ext]'
        },*/
        type: 'asset/resource',
        generator: {
          filename: './images/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/, //fonts
        /*loader: "url-loader",
        options: {
          limit: false,
          name: 'fonts/[name].[ext]'
        },*/
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]'
        }
      }
    ],
  },
};