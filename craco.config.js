/*
 * @Description:
 * @Author: linkaiyan
 * @Date: 2022-02-18 14:21:17
 * @LastEditTime: 2022-07-05 15:17:43
 * @LastEditors: linkaiyan
 * @Reference:
 */


/* craco.config.js */
const CracoLessPlugin = require('craco-less');
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' )
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProd = process.env.REACT_APP_ENV === 'production';

const config = {
  webpack: {
    plugins: [
      new SimpleProgressWebpackPlugin(),
    ],
  },
  babel:{
    plugins: [
      [
        "import",
        {
          "libraryName":"antd",
          "libraryDirectory":"es",
          "style":true//设置为true即是less
        }
      ]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#0CCFC9' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ]
}

if(isProd) {
  config.webpack.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true,
        },
      },
      sourceMap: false,
      parallel: true,
    })
  )
}

module.exports = config;
