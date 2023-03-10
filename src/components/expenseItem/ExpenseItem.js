import React from 'react'
import './ExpenseItem.css'
import { FaRegTrashAlt } from "react-icons/fa";
import ExpenseDate from '../expenseDate/ExpenseDate'

const ExpenseItem = ({title, amount,date, deleteItem,id}) => {
  return (
    <div className='expense-item'>
          <ExpenseDate date={date}/>

        <div className='expense-item__description'>
            <h2>{title}</h2>
        </div>
        <div className='expense-item__price'>${amount}</div>
        
          <FaRegTrashAlt 
          onClick={()=>deleteItem(id)}
          className='btn-delete'/>
    </div>
  )
}

export default ExpenseItem