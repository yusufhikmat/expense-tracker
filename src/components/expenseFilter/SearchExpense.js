import React from 'react'
import './SearchExpense.css'
const SearchExpense = ({search, setSearch}) => {

  const handleSearch=(e)=>{
    e.preventDefault()
  }
  return (
    <div className='search-filter'>
      <form onSubmit={handleSearch}>
      <div className='search-filter__control'>
        <label>Search Item</label>
        <input 
            type="text" 
            placeholder='search'
            autoFocus
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
      </form>
    </div>
  )
}

export default SearchExpense