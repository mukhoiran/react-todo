import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

function App() {

  const [todoItem, setTodoItem] = useState('');
  const [items, setItems] = useState([]);

  function handleSubmit(e){
    e.preventDefault()
    setItems([...items, todoItem])
    // console.log(items)
    setTodoItem('')
  }

  function handleChange(e){
    setTodoItem(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todoItem} onChange={handleChange} />
        <button>Add</button>
      </form>

      <List items={items}/>
    </div>
  )

}

export default App;
