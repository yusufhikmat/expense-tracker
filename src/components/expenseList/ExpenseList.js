import React from 'react'
import SearchExpense from '../expenseFilter/SearchExpense'
import ExpenseItem from '../expenseItem/ExpenseItem'
import './ExpenseList.css'

const ExpenseList = ({expenses,handleDeleteItem,search, setSearch}) => {

  
  return (
    <div className='expenses'>
    <SearchExpense 
      search={search}
      setSearch={setSearch}
    />
        {expenses.length ? (
          expenses.map((item)=>{
        return ( 
        <ExpenseItem 
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        id={item.id}
        handleDeleteItem={handleDeleteItem}
      />
    )})
    )  : <p className='emptyList'>Your expense list is empty</p>}
        
    
    </div>
  )
}

export default ExpenseList