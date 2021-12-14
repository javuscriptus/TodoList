import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from './store/todoSlice'

import InputField from './components/InputField'
import TodoList from './components/TodoList'

import './App.css'

export default function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

  const addTask = () => { 
    dispatch(addTodo({ text }));
    setText('');
  };


  return (
    <div className="App" >
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}