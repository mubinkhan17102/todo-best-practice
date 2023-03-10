import React from 'react';
import classes from './Checkbox.module.scss'

const Checkbox = () => {
  return (
    <>
        <input type="checkbox" className={`${classes.Checkbox}`}/>
    </>
  )
}

export default Checkbox