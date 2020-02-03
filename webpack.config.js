var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve(process.cwd(), "./src/styles")]
              }
            }
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                "./src/styles/_variables.scss",
                "./src/styles/_mixins.scss"
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules", "src"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    watchContentBase: true,
    progress: true
  }
};
