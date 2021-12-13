import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'

export default function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    // проверяем пустое ли поле и если не пустое, то записываем в стейт
    text.trim().length && setTodos((prev) => [...prev, {
      id: new Date().toISOString(),
      text: text,
      completed: false
    }]);
    // очищаем стейт с введенным текстом
    setText('');
  }

  const removeTodo = (id) => {
    // фильтруем массив и удаляем выбранный ToDo
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodoComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    )
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      {todos.length !== 0 && <TodoList todos={todos} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo} />}
    </div>
  );
}