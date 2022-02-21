/*
 * @Description: 
 * @Author: linkaiyan
 * @Date: 2022-02-18 17:29:58
 * @LastEditTime: 2022-02-21 11:41:54
 * @LastEditors: linkaiyan
 * @Reference: 
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import baseUrlConfig from '../config/index';

interface ResponseData<T> {
  code: number;

  data: T;

  msg: string;
}

const baseURL = baseUrlConfig[process.env.REACT_APP_ENV as string].baseURL;
let requestNum:number = 0;

const instance: AxiosInstance = axios.create({
  baseURL,
  timeout: 60000,
  headers: {
    token: 'a9de74b2c2894705a97c4864ba397bf4-62a25f05-e89c-489a-8850-b6133a203ccd'
  }
})

// 请求拦截
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    requestNum++;

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
)

// 响应拦截
instance.interceptors.response.use(
  (response: AxiosResponse<ResponseData<any>>) => {
    requestNum--;
    if(requestNum === 0) {
      // 取消loading
    }
    if(response.data.code === 0) {
      return response.data as any;
    }
    return Promise.reject(response.data.msg);
  },
  (error: AxiosError) => {
    requestNum--;
    if(requestNum === 0) {
      // 取消loading
    }
    return Promise.reject(error);
  }
)

function request<T> (options: AxiosRequestConfig) {
  return instance.request<T>(options)
}

export default request;