import React from 'react'
import classes from './TodoItem.module.scss';
import Button from '../../../components/button/Button';
import Checkbox from '../../../components/checkbox/Checkbox';

const TodoItem = () => {
  const testElement = React.createElement('div', null, []);
  console.log(testElement);
  return (
    <div className={`${classes.ItemStyle} flex`}>
        <div className={`${classes.ItemContent} ${classes.LeftContent}`}>
            <Checkbox/>
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