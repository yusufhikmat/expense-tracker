import React,{useState} from 'react'
import './App.css'
import ExpenseList from './components/expenseList/ExpenseList'
import ShowExpenseForm from './components/newExpense/ShowExpenseForm';

// const dummy_data = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   }];
const App = () => {
  
     const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem("ExpenseList")) || [])
     const [search, setSearch] = useState('')

        //deleting item from the list
        const handleDeleteItem = (id)=>{
          const deleteItem = expenses.filter((item)=>item.id !== id)
          window.confirm("Are you sure you want to delete this item")
          setExpenses(deleteItem)
          localStorage.setItem("ExpenseList", JSON.stringify(deleteItem))

        }
        
        const addNewExpenses = (expense)=>{
          setExpenses((prev)=>{
            //checking if id is present or not

            // const id= prev.length ? prev[prev.length -1].id + 1 : 1;
            // const myNewItem = {id, ...expense }
            // const newData = [ ...prev,myNewItem]
            const newData = [...prev, {...expense, id:prev.length ? prev[prev.length -1].id + 1 : 1}]
            localStorage.setItem("ExpenseList", JSON.stringify(newData))
            return newData
            
          })
          
        }
        
  return (
    <div className='app'>
    <ShowExpenseForm onAddNewExpense={addNewExpenses}/>
      <ExpenseList 
        expenses={expenses.filter((item)=>((item.title).toLowerCase()).includes(search.toLowerCase()))}
        handleDeleteItem={handleDeleteItem}
        setSearch={setSearch}
        search={search}
        />
      
    </div>
  )
}

export default App