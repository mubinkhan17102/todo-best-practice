import React, { MouseEventHandler, ReactNode } from 'react'
import classes from './Button.module.scss';

type IProps = {
    children?: ReactNode;
    type?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({children, type, onClick}:IProps) => {
  return (
    <button type='button' className={`${classes.Button}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button