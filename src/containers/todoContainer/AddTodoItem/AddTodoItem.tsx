import { FormEventHandler, useState } from 'react';
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

  const handleAdTodo:FormEventHandler<HTMLFormElement> = (event)=>{
    event.preventDefault();
    addTodo(task);
    setTask('');
  }

  return (
    <>
      {task}
      <form onSubmit={handleAdTodo}>
        <TextField handleTask = {handleTask} task = {task}/>
        <Button type='submit'>
          Add
        </Button>
      </form>
    </>
  )
}

export default AddTodoItem