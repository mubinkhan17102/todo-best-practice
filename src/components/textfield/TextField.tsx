import React from 'react';
import classes from './TextField.module.scss'

const TextField = () => {
  return (
    <input type="text" className={`${classes.TextField}`}/>
  )
}

export default TextField