import React from 'react';
import classes from './TextField.module.scss'

type IProps = {
    handleTask: (value: string)=>void
    task?: string
}

const TextField = ({handleTask, task}:IProps) => {
  return (
    <input type="text" className={`${classes.TextField}`} onChange={(e)=>handleTask(e.target.value)} value={task}/>
  )
}

export default TextField