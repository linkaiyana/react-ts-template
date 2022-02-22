/*
 * @Description:
 * @Author: linkaiyan
 * @Date: 2022-02-21 10:38:39
 * @LastEditTime: 2022-02-22 09:49:55
 * @LastEditors: linkaiyan
 * @Reference:
 */
import request from '../utils/request';

const GET = 'GET'

interface PlainObject {}

export function getCurTextBook () {
  return request<PlainObject>({
    url: '/fzdTextbook/queryByTextBookId',
    method: GET,
  })
}
