import React from 'react'
import ExpenseItem from '../expenseItem/ExpenseItem'
import './Expenses.css'
const Expenses = ({expenses}) => {
    
  return (
    <div className='expenses'>
        <ExpenseItem 
            title={expenses[0].title}
            date={expenses[0].date}
            amount={expenses[0].amount}
            />
    </div>
  )
}

export default Expenses