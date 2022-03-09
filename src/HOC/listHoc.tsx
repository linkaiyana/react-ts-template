/*
 * @Description:
 * @Author: linkaiyan
 * @Date: 2022-02-25 09:12:12
 * @LastEditTime: 2022-03-09 09:38:39
 * @LastEditors: linkaiyan
 * @Reference:
 */
/*
 * @Description:
 * @Author: linkaiyan
 * @Date: 2022-02-25 09:12:12
 * @LastEditTime: 2022-03-09 09:38:23
 * @LastEditors: linkaiyan
 * @Reference:
 */
/*
 * @Description:
 * @Author: linkaiyan
 * @Date: 2022-02-25 09:12:12
 * @LastEditTime: 2022-03-09 09:38:22
 * @LastEditors: linkaiyan
 * @Reference:
 */
import React, { useCallback, useState } from 'react';

const listHOC = (Component: any) => () => {
    const [curPage, setCurPage] = useState(1);
    const changePage = useCallback(page => {
      setCurPage(page);
    }, [curPage])

    return <Component curPage={curPage} onChange={changePage} />
  }

export default listHOC;
