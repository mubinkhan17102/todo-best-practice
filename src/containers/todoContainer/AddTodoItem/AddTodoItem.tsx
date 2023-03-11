import { useState } from 'react';
import Button from '../../../components/button/Button';
import TextField from '../../../components/textfield/TextField';

type AddTodoItemType = {
  addTodo?: any
}

const AddTodoItem = ({addTodo}:AddTodoItemType) => {
  const [task, setTask]= useState<string>('');
  
  const handleTask = (value: string)=>{
    setTask(value)
  }

  const handleAdTodo = ()=>{
    addTodo(task);
    setTask('');
  }

  return (
    <>
      {task}
      <form>
        <TextField handleTask = {handleTask} task = {task}/>
        <Button onClick={handleAdTodo}>
          Add
        </Button>
      </form>
    </>
  )
}

export default AddTodoItem