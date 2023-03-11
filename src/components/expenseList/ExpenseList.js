import React from 'react'
import ExpenseItem from '../expenseItem/ExpenseItem'
import './ExpenseList.css'

const ExpenseList = ({expenses,handleDeleteItem}) => {
  return (
    <div className='expenses'>
      {expenses.map((item)=>{
      return ( 
      <ExpenseItem 
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        id={item.id}
        handleDeleteItem={handleDeleteItem}
      />
    )})}
    </div>
  )
}

export default ExpenseList