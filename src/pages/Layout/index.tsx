/*
 * @Description:
 * @Author: linkaiyan
 * @Date: 2022-02-21 09:40:58
 * @LastEditTime: 2022-03-09 09:41:27
 * @LastEditors: linkaiyan
 * @Reference:
 */
import { Button } from 'antd';
import { useEffect } from "react";
import { getCurTextBook } from '../../api/home';
import listHoc from '../../HOC/listHoc';

const ComponentA = (props: { curPage: number, onChange: (page: number) => void }) => {
  const { curPage, onChange } = props;
  return <>{curPage}</>
}

const NewComponent = listHoc(ComponentA);

const Layout = () => {
  useEffect(() => {
    getCurTextBook().then(res => {
      console.log(res);
    })
  })
  return (
    <>
      <NewComponent />
      <Button type="primary">确认</Button>
      <div className="box"></div>
    </>
  )

}

export default Layout;
