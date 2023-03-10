import './TodoContainer.modules.scss'
import TodoItem from './TodoItem/TodoItem'

export const TodoContainer = () => {
  const todos = ['Todo 1', 'Todo 2','Todo 3']
  return (
    <>
      {
        todos.map(todo => <TodoItem title={todo} key={todo}/>)
      }
    </>
  )
}
