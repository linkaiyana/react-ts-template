/*
 * @Description:
 * @Author: linkaiyan
 * @Date: 2022-02-21 09:40:58
 * @LastEditTime: 2022-02-22 10:49:28
 * @LastEditors: linkaiyan
 * @Reference:
 */
import { useEffect } from "react";
import { getCurTextBook } from '../../api/home';

const Layout = () => {
  useEffect(() => {
    getCurTextBook().then(res => {
      console.log(res);
    })
  })
  return (
    <>
      layout
    </>
  )

}

export default Layout;
