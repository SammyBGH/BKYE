  
import React from 'react'
import '../styles/Header.css'
import DarkModeToggle from './DarkModeToggle'

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">MyPortfolio</h1>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
        <DarkModeToggle />
      </nav>
    </header>
  )
}

export default Header
