import React from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)

    return (
        <ul>
            <span>Todo:</span>
            {
                todos.map(todo => <TodoItem key={todo.id} {...todo} />)
            }
        </ul>
    )
}

export default TodoList
