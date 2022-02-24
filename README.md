### 用作移动端

## 卸载antd，安装antd-mobile
  npm uninstall antd
  
## 配置antd-mobile按需引入
  # craco.config.js修改如下
    babel:{
      plugins: [
        [
          "import",
          {
            "libraryName":"antd-mobile",
            "libraryDirectory":"es/components",
            "style":false//设置为true即是less
          }
        ]
      ]
    },
  # 并且需要在入口js中引入antd-mobile样式
    import 'antd-mobile/es/global'

## 配置antd-mobile主题色
  # 全局css中引入
    :root:root {
      --adm-color-primary: #a062d4;
    }
## 添加开发时依赖
  "postcss": "^8.3.0"

## 配置px2vw
  # 安装依赖"postcss-px-to-viewport-with-include"
  # craco.config.js添加以下代码
    style: {
      postcss: {
        mode: 'extends',
        loaderOptions: {
          postcssOptions: {
            ident: 'postcss',
            plugins: [
              [
                'postcss-px-to-viewport-with-include',
                {
                  unitToConvert: 'px', //需要转换的单位，默认为"px"
                  viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
                  unitPrecision: 6, //单位转换后保留的精度
                  propList: [
                    //能转化为vw的属性列表
                    '*',
                  ],
                  viewportUnit: 'vw', // 希望使用的视口单位
                  fontViewportUnit: 'vw', //字体使用的视口单位
                  selectorBlackList: [], //需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
                  minPixelValue: 1, //设置最小的转换数值，如果为1的话，只有大于1的值会被转换
                  mediaQuery: false, //媒体查询里的单位是否需要转换单位
                  replace: true, //是否直接更换属性值，而不添加备用属性
                  // exclude: /(\/|\\)(node_modules)(\/|\\)/, //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
                },
              ],
            ],
          },
        },
      },
    },
