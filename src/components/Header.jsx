import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div classNameName="container">
            <nav classNameName="desktop_nav">
              <div classNameName='logo'>
                <div classNameName="logo">SK</div>
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