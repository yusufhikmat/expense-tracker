import React from 'react'
import './ExpenseDate.css'


const ExpenseDate = ({date}) => {
  const currentDate = new Date(date)
  console.log(currentDate,currentDate.getFullYear())
    const year = currentDate.getFullYear()
    const month = currentDate.toLocaleString("en-US", {month:'long'})
    const day = currentDate.toLocaleString("en-US",{day:"2-digit"})
  return (
    <div className='expense-date'>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
    </div>
  )
}

export default ExpenseDate