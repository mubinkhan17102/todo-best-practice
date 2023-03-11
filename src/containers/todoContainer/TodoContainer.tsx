import './TodoContainer.modules.scss'
import TodoItem from './TodoItem/TodoItem';
import AddTodoItem from './AddTodoItem/AddTodoItem';
import { useState } from 'react';

export const TodoContainer = () => {
  const [todos , setTodo] = useState<string[]>( ['Todo 1', 'Todo 2','Todo 3']);
  
  const addTodo = (task:string)=>{
    setTodo((prevTodos)=>{
      return [...prevTodos, task];
    });
  }

  return (
    <>
      <AddTodoItem addTodo={addTodo}/>
      {
        todos.map(todo => <TodoItem title={todo} key={todo}/>)
      }
    </>
  )
}
