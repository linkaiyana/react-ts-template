/*
 * @Description:
 * @Author: linkaiyan
 * @Date: 2022-03-09 17:31:46
 * @LastEditTime: 2022-03-10 14:53:20
 * @LastEditors: linkaiyan
 * @Reference:
 */
import './index.less';
import { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
const Calendar = (props:any) => {
  const { year=new Date().getFullYear(), month } = props;

  // 选中年
  const [fullYear, setFullYear] = useState<number>(year || new Date().getFullYear())
  // 当前月0-11
  const [curMonth, setCurMonth] = useState<number>(month || new Date().getMonth());
  // 当前月日期列表
  const [curMonth_date_list, setCurMonth_date_list] = useState<Array<{date: number; noCurMonth?: boolean;}>>([]);

  // 是否闰年
  const is_leaf = useCallback(year => {
    //闰年的条件是符合下面二者之一：
    //(1)年份能被4整除，但不能被100整除；
    //(2)年份能被400整除。
    if((year%4==0 && year%100!=0)||(year%400==0)){
      return 1;
    }
    return 0;
  }, []);

  // 生成当月日期列表
  const generateDateList = useCallback((year, month) => {
    // 每个月对应的天数
    const  dayOfMonth = [31, 28+is_leaf(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // 第一天是周几
    const firstDayDate = new Date(year, month, 1).getDay();
    // 当前月有几周（多少列）
    const CurMonthWeek = Math.ceil((dayOfMonth[month] + firstDayDate)/7);
    const curMonthDateList = [];
    let lastMonthDate = 0;
    if(month === 0) {
      // 第一个月上个月是12月；
      lastMonthDate = 31;
    } else {
      lastMonthDate = dayOfMonth[month - 1];
    }
    // 添加上个月的日期
    for(let i = 0 ; i < firstDayDate; i++) {
      curMonthDateList.unshift({date: lastMonthDate--, noCurMonth: true});
    }
    for(let j = 1; j <= dayOfMonth[month]; j++) {
      curMonthDateList.push({date: j});
    }
    const length = curMonthDateList.length;
    if(curMonthDateList.length < CurMonthWeek * 7) {
      for(let i = 1; i <= (CurMonthWeek*7) - length; i++) {
        curMonthDateList.push({date: i, noCurMonth: true});
      }
    }
    setCurMonth_date_list(curMonthDateList);
  }, []);

  // 上一年
  const preYear = useCallback(() => {
    const newYear = fullYear - 1;
    generateDateList(newYear, curMonth);
    setFullYear(newYear);
  }, [fullYear, curMonth]);
  // 下一年
  const nextYear = useCallback(() => {
    const newYear = fullYear + 1;
    generateDateList(newYear, curMonth);
    setFullYear(newYear);
  }, [fullYear, curMonth]);
  // 上一月
  const preMonth = useCallback(() => {
    let year = fullYear;
    let month = curMonth - 1;
    if(curMonth === 0) {
      // 当前是一月，年数减一，月数重置为12月
      year = fullYear - 1;
      month = 11;
    }
    setCurMonth(month);
    setFullYear(year);
    generateDateList(year, month);
  }, [fullYear, curMonth]);
  // 下一月
  const nextMonth = useCallback(() => {
    let year = fullYear;
    let month = curMonth + 1;
    if(curMonth === 11) {
      // 当前是一月，年数减一，月数重置为12月
      year = fullYear + 1;
      month = 0;
    }
    setCurMonth(month);
    setFullYear(year);
    generateDateList(year, month);
  }, [fullYear, curMonth]);


  useEffect(() => {
    // 生成当月日期列表
    console.log('render');
    generateDateList(fullYear, curMonth);
  }, [])

  return (
    <>
      <div className="btn_container">
        <Button type='primary' onClick={preYear}>上年</Button>
        <Button type='primary' onClick={preMonth}>上月</Button>
        <Button type='primary' onClick={nextMonth}>下月</Button>
        <Button type='primary' onClick={nextYear}>下年</Button>
      </div>
      <div className='cur_date'>{fullYear}/{curMonth+1}</div>
      <div className='calendar_wrapper'>
        <div className='calendar_item title'>日</div>
        <div className='calendar_item title'>一</div>
        <div className='calendar_item title'>二</div>
        <div className='calendar_item title'>三</div>
        <div className='calendar_item title'>四</div>
        <div className='calendar_item title'>五</div>
        <div className='calendar_item title'>六</div>
        {
          curMonth_date_list.map((item, index) =>
            <div
              key={index}
              className={[
                'calendar_item',
                item.noCurMonth ? 'gray' : '',
                fullYear===new Date().getFullYear() && curMonth === new Date().getMonth() && item.date === new Date().getDate() ? 'today' : ''].join(' ')}
            >
              {item.date}
            </div>
          )
        }
      </div>
    </>
  )

}

export default Calendar;
