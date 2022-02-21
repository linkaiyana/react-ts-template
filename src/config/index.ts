/*
 * @Description: 
 * @Author: linkaiyan
 * @Date: 2022-02-21 10:19:02
 * @LastEditTime: 2022-02-21 14:24:14
 * @LastEditors: linkaiyan
 * @Reference: 
 */
interface EnvConfg {
  baseURL: string;
}

interface UrlConfig {
  development: EnvConfg;
  test: EnvConfg;
  production: EnvConfg;
  [propsName: string]: EnvConfg;
}

const baseUrlConfig: UrlConfig = {
  development: {
    baseURL: 'https://ke2.fenzhidao.com/teacher/',
  },
  test: {
    baseURL: 'https://ke2.fenzhidao.com/teacher/'
  },
  production: {
    baseURL: 'https://ke.fenzhidao.com/teacher/'
  }
}

export default baseUrlConfig;