/*
 * @Description:
 * @Author: linkaiyan
 * @Date: 2022-02-18 15:45:00
 * @LastEditTime: 2022-02-22 14:52:59
 * @LastEditors: linkaiyan
 * @Reference:
 */
export {};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
  }
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    /**
     * @description 设置为true，则会在请求过程中隐藏loading，否则展示loading
     */
    hideLoading?: boolean;
  }
}
