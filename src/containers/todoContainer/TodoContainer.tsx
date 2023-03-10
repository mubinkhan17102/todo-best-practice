import './TodoContainer.modules.scss'
import TodoItem from './TodoItem/TodoItem';
import Button from '../../components/button/Button';
import TextField from '../../components/textfield/TextField';

export const TodoContainer = () => {
  const todos = ['Todo 1', 'Todo 2','Todo 3']
  return (
    <>
      <form>
        <TextField/>
        <Button>
          Add
        </Button>
      </form>
      {
        todos.map(todo => <TodoItem title={todo} key={todo}/>)
      }
    </>
  )
}
