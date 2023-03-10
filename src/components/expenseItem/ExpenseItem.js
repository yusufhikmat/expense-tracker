import React from 'react'
import './ExpenseItem.css'
import { FaRegTrashAlt } from "react-icons/fa";
import ExpenseDate from '../expenseDate/ExpenseDate'

const ExpenseItem = ({title, amount,date}) => {

  return (
    <div className='expense-item'>
          <ExpenseDate date={date}/>

        <div className='expense-item__description'>
            <h2>{title}</h2>
        </div>
        <div className='expense-item__price'>${amount}</div>
        <div className='btn-delete'><FaRegTrashAlt/></div>
    </div>
  )
}

export default ExpenseItem