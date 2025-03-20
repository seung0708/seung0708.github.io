import React from 'react'
import { NavLink } from 'react-router-dom'

import {Sun} from 'lucide';

const Header = () => {
  return (
    <header>
        <div class="container">
            <nav class="desktop_nav">
                <div class="logo">SK</div>
                <ul class="nav_links">
                    <li class="nav_link"><a href="#about">About</a></li>
                    <li class="nav_link"><a href="#projects">Projects</a></li>
                    <li class="nav_link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header