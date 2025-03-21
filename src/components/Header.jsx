import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import {Sun, Moon} from 'lucide-react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true)

  const handleToggleClick = () => {
    if (darkMode) {
      setDarkMode(!darkMode)
      document.body.style.backgroundColor = '#000'
    } else {
      setDarkMode(darkMode)
      document.body.style.backgroundColor = '#FFF'
    }
    
  }

  return (
    <header>
        <div className="container">
            <nav className="desktop_nav">
                <div className="logo">SK</div>
                <ul className="nav_links">
                    <li className="nav_link"><a href="#about">About</a></li>
                    <li className="nav_link"><a href="#projects">Projects</a></li>
                    <li className="nav_link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div classNameName='switch'>
          <button onClick={handleToggleClick}>
            <Sun />
          </button>
          <button onClick={handleToggleClick}>
            <Moon />
          </button>
        </div>
    </header>
  )
}

export default Header