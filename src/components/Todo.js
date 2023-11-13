// Todo.js
import React from "react"

function Todo({todo, index, deleteTodo}) {
  return (
    <div>
      {todo.text}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  )
}

export default Todo
