import React,{useState} from 'react'
import TodoList from './TodoList'
import Form from './Form'
import {v4 as uuid} from 'uuid'
const TodoApp = () => {

    let arrayDummy=[
        {
            id:uuid(),
            todo:"code karo"
        },
        {
            id:uuid(),
            todo:"video upload karo"
        },
        {
            id:uuid(),
            todo:"practice karo"
        },
        {
            id:uuid(),
            todo:"code push karo"
        }
    ]

    let [todos , setTodos] = useState(arrayDummy)

    const addTodo = (todo)=>{
        setTodos([...todos,todo])
    }

    const deleteTodo = (id)=>{
        const newTodo = todos.filter((todo)=>todo.id !== id);
        setTodos(newTodo);
    }

  return (
    <div>
        <h1 style={{textAlign:'center'}}>TodoList</h1>
        <Form addTodo={addTodo} todos={todos} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default TodoApp