import React from 'react'
import HeaderLink from './HeaderLink'
import './Header.module.scss'

const Header = () => {
  return (
    <header>
      <h2>Todo App</h2>
      <nav>
        <HeaderLink link='home'>Home</HeaderLink>
        <HeaderLink link='contact'>Contact</HeaderLink>
        <HeaderLink link='about'>About</HeaderLink>
      </nav>
    </header>
  )
}

export default Header