// TodoList.js
"use client"
import React, {useState} from "react"
import Todo from "./Todo"
import AddTodo from "./AddTodo"

function TodoList() {
  const [todos, setTodos] = useState([
    {text: "Learn about React"},
    {text: "Meet friend for lunch"},
    {text: "Build a todo app"},
  ])

  const addTodo = (text) => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList
