import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
      <nav>
        <div class='nav-center'>
          <div class='nav-header'>
            <img src={logo} alt='logo'/>
            <button class='nav-toggle'>
              <FaBars />
            </button>
          </div>
          <div class='links-container show-container'>
            <ul class='links'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
              <li>
                <a href='#'>Products</a>
              </li>
            </ul>
          </div>
          <ul class='social-icons'>
            <li>
              <a href='#'><FaTwitter /></a>
            </li>
            <li>
              <a href='#'><FaTwitter /></a>
            </li>
            <li>
              <a href='#'><FaTwitter /></a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
