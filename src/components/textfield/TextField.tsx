import React, { useEffect, useRef } from 'react';
import classes from './TextField.module.scss'

type IProps = {
    handleTask: (value: string)=>void
    task?: string
}

const TextField = ({handleTask, task}:IProps) => {
  const inputFieldRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    inputFieldRef.current?.focus();
  }, [])
  return (
    <input type="text" ref={inputFieldRef} className={`${classes.TextField}`} onChange={(e)=>handleTask(e.target.value)} value={task}/>
  )
}

export default TextField