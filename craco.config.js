/*
 * @Description:
 * @Author: linkaiyan
 * @Date: 2022-02-18 14:21:17
 * @LastEditTime: 2022-07-05 11:48:01
 * @LastEditors: linkaiyan
 * @Reference:
 */


/* craco.config.js */
const CracoLessPlugin = require('craco-less');
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' )

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

module.exports = config;
