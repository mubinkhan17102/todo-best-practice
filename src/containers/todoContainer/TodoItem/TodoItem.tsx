import React from 'react'
import classes from './TodoItem.module.scss'

const TodoItem = () => {
  const testElement = React.createElement('div', null, []);
  console.log(testElement);
  return (
    <div className={`${classes.ItemStyle} flex`}>
        <div className={`${classes.ItemContent}`}>
            <input type="checkbox" />
            Task to do.
        </div>
        <div>
            <button>Edit</button>
            <button>Edit</button>
        </div>
    </div>
  )
}

export default TodoItem