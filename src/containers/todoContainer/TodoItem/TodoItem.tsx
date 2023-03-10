import React from 'react'
import classes from './TodoItem.module.scss';
import Button from '../../../components/button/Button';

const TodoItem = () => {
  const testElement = React.createElement('div', null, []);
  console.log(testElement);
  return (
    <div className={`${classes.ItemStyle} flex`}>
        <div className={`${classes.ItemContent} ${classes.LeftContent}`}>
            <input type="checkbox" />
            Task to do.
        </div>
        <div className={`${classes.Buttons}`}>
            <Button>
              Edit
            </Button>
            <Button>
              Delete
            </Button>
        </div>
    </div>
  )
}

export default TodoItem