import React, { useContext } from 'react'
import TodoContext from '../../context/TodoContext';

function TodoList() {
  const { todoValue, removeTodo, allRemoveTodo } = useContext(TodoContext);

  return (
    <div id='listDiv'>
      <ul>
        {todoValue.map((todo, index) => (
          <div>
            <li key={index}> {todo.todo}  </li>
            <i onClick={() => removeTodo(index)} className="fa-solid fa-trash"></i>
          </div>
        ))}
      </ul>

      <div id='deneme'> 
      <h3>Total todo {todoValue.length}</h3> 
      <button onClick={allRemoveTodo} className="fa-solid fa-trash"> Clear All </button></div>
    </div>
  )
}

export default TodoList;
