import React from 'react'
import List from './Components/List'
import Add from './Components/Add'

const App = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 m-4">
      <h1>Todo List</h1>
      <div  className="d-flex justify-content-between m-5  w-100">
        <List/>
        <Add/>
      </div>
    </div>
  )
}

export default App
