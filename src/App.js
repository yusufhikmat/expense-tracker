import React,{useState} from 'react'
import './App.css'
import ExpenseList from './components/expenseList/ExpenseList'
import ExpenseForm from './components/newExpense/ExpenseForm';

const App = () => {
  
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        }];

        const [listItems, setListItems] = useState(expenses)

        const handleDeleteItem = (id)=>{
          const deleteItem = listItems.filter((item)=>item.id !== id)
          setListItems(deleteItem)
        }
      
  return (
    <div className='app'>
    <ExpenseForm />
      <ExpenseList 
        expenses={listItems}
        handleDeleteItem={handleDeleteItem}
        />
      
    </div>
  )
}

export default App