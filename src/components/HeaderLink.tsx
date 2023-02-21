import React, { ReactNode } from 'react'
import './HeaderLink.module.scss';

interface HeaderLinkProps{
    link?: string
    children: ReactNode
}

const HeaderLink = ({children, link}:HeaderLinkProps) => {
  return (
    <a href={link ? link : '#' }>{children}</a>
  )
}

export default HeaderLink