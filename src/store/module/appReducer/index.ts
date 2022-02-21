/*
 * @Description: 
 * @Author: linkaiyan
 * @Date: 2022-02-18 16:49:27
 * @LastEditTime: 2022-02-21 14:21:25
 * @LastEditors: linkaiyan
 * @Reference: 
 */
import { Reducer } from 'redux';
import { IAction } from '../../types';
import * as constants from './constants';

export interface AppState {
  init: boolean;
}

const appdefault = {
  init: false
}

const appReducer: Reducer<AppState, IAction<any>> = (state = appdefault, action: IAction<any>) => {
  const { type, payload } = action;

  switch(type) {
    case constants.CHANGE_VIDEODATA :
      return {
        ...state,
        init: payload
      }
    default: 
      return state
  }
}

export default appReducer;