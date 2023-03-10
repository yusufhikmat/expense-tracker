import React from 'react'
import ExpenseItem from '../expenseItem/ExpenseItem'
import './Expenses.css'
const Expenses = ({expenses}) => {
  return (
    <div className='expenses'>
        {expenses.map((item)=>{
            return (
            <ExpenseItem    
                key={item.id}
                date={item.date}
                title={item.title}
                amount={item.amount}
            /> 
            )
        })}

    </div>
  )
}

export default Expenses