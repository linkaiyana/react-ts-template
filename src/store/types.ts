/*
 * @Description: 
 * @Author: linkaiyan
 * @Date: 2022-02-18 15:36:25
 * @LastEditTime: 2022-02-21 14:34:33
 * @LastEditors: linkaiyan
 * @Reference: 
 */
import { AppState } from './module/appReducer';

export interface IStoreState {
  app: AppState
}

export interface IAction<T> {
  type: string;
  payload: T;
}