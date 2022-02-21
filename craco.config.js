/*
 * @Description: 
 * @Author: linkaiyan
 * @Date: 2022-02-18 14:21:17
 * @LastEditTime: 2022-02-21 15:27:31
 * @LastEditors: linkaiyan
 * @Reference: 
 */


/* craco.config.js */
const CracoLessPlugin = require('craco-less');

module.exports = {
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
};