import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
            <nav className="desktop_nav">
              <div className='logo'>
                <span className="main-text">Seung Kim</span>
                <span className='hover-text'>김승현</span>
              </div>
                <ul className="nav_links">
                    <li className="nav_link"><a href="#about">About</a></li>
                    <li className="nav_link"><a href="#projects">Projects</a></li>
                    <li className="nav_link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header