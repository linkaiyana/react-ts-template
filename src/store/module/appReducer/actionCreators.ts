/*
 * @Description: 
 * @Author: linkaiyan
 * @Date: 2022-02-18 16:49:56
 * @LastEditTime: 2022-02-18 17:20:34
 * @LastEditors: linkaiyan
 * @Reference: 
 */
import * as constants from './constants';

export const updateSideBar = (payload: any) => ({
  type: constants.CHANGE_VIDEODATA,
  payload,
});