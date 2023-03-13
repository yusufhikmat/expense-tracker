import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './ShowExpenseForm.css'
const ShowExpenseForm = ({onAddNewExpense}) => {
    const [displayExpenseForm, setDisplayExpenseForm] = useState(false)

    const handleCancel=()=>{
        setDisplayExpenseForm(false)
    }
  return (
    <div className='new-expense'>
    {!displayExpenseForm && <button onClick={()=>setDisplayExpenseForm(true)}>Add New Expenses</button>}
        {displayExpenseForm && <ExpenseForm onAddNewExpense={onAddNewExpense}
                                    handleCancel={handleCancel}
        />}
    </div>
  )
}

export default ShowExpenseForm