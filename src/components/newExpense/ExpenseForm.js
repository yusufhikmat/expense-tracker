import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({onAddNewExpense,handleCancel}) => {
    const[title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        const expenseData ={
            title: title,
            amount:amount,
            date: new Date(date)
        }
        onAddNewExpense(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }
   
  return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='title'>Title</label>
                    <input
                        required 
                        type="text"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='amount'>Amount</label>
                    <input 
                        required
                        type="number" 
                        min="0.01" 
                        step="0.01"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='title'>Date</label>
                    <input 
                        required
                        type="date" 
                        min="2015-12-30" 
                        max="2023-12-30"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                        />
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type="submit">Submit</button>
            <button onClick={handleCancel}>Cancel</button>
            </div>
        </form>
  )
}

export default ExpenseForm