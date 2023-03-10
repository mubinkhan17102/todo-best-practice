import React from 'react'
import classes from './TodoItem.module.scss';
import Button from '../../../components/button/Button';
import Checkbox from '../../../components/checkbox/Checkbox';

type TodoItemProps = {
  title?: string
}

const TodoItem = ({title}: TodoItemProps) => {

  return (
    <div className={`${classes.ItemStyle} flex`}>
        <div className={`${classes.ItemContent} ${classes.LeftContent}`}>
            <Checkbox/>
            {title}
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