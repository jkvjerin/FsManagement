const path = require('path')
// const CopyWebpackPlugin = require("copy-webpack-plugin");
 const HtmlWebpackPlugin = require("html-webpack-plugin");
// const TerserWebpackPlugin = require("terser-webpack-plugin");

//const modepro = require('production')
// import { modepro } from '.\webpack-production-config.jsproduction'
 const config = {
  // define entry point
  entry: {
    main :'./src/index.js',
    addproduct:'./src/product/addproduct.js',
    showProduct :'./src/product/showProduct.js',
    headtag:'./src/webPage/headTag.js',
    // ar: "./src/index.ts",
    
  }
  // ,
  // module: {
  //   rules: [
  //     {
  //       test: /\.ts?$/,
  //       use: "ts-loader",
  //       exclude: /node_modules/,
  //     },
  //     {
  //       test: /\.css$/i,
  //       use: ["style-loader", "css-loader"],
  //     },
  //     {
  //       test: /\.(png|jpe?g|gif|glb)$/i,
  //       use: [
  //         {
  //           loader: "url-loader",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // resolve: {
  //   extensions: [".tsx", ".ts", ".js", ".css", ".jpg"],
  // }
  ,
   mode: 'development',
  // mode: 'production',
  // define output point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name].js`
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: "babel-loader",
          Options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|glb)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".jpg"],
  },
  Plugins: [
    new HTMLWebpackPlugin({

      template: "./src/index.html",
    }),
  ],
  devtool: 'eval-source-map',
  watch: true,
};
module.exports = config;

// module.exports = (env, argv) => {
//   if (argv.mode === 'development') {
//     config.devtool = 'source-map';
//   }

//   if (argv.mode === 'production') {
//     //...
//   }

//   return config;
// };