import React, { MouseEventHandler, ReactNode } from 'react'
import classes from './Button.module.scss';

type IProps = {
    children?: ReactNode;
    type?: 'button'| 'submit'
}

const Button = ({children, type}:IProps) => {
  return (
    <button type={type} className={`${classes.Button}`}>
        {children}
    </button>
  )
}

export default Button