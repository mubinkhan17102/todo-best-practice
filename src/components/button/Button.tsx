import React, { ReactNode } from 'react'
import classes from './Button.module.scss';

type IProps = {
    children?: ReactNode;
    type?: string
}

const Button = ({children, type}:IProps) => {
  return (
    <button className={`${classes.Button}`}>
        {children}
    </button>
  )
}

export default Button