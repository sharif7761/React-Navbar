import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [showLinks, setShowLinks]= useState(false)

  return (
      <nav>
        <div class='nav-center'>
          <div class='nav-header'>
            <img src={logo} alt='logo'/>
            <button class='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
              <FaBars />
            </button>
          </div>
          {
            showLinks && (
                <div class='links-container show-container'>
                  <ul class='links'>
                    {
                      links.map((link) => {
                        const {id, url, text} = link
                        return (
                            <li key={id}>
                              <a href={url}>{text}</a>
                            </li>
                        )
                      })
                    }

                  </ul>
                </div>
            )
          }

          <ul class='social-icons'>
            {
              social.map((socailIcon) => {
                const {id, url, icon} = socailIcon
                return(
                    <li key={id}>
                      <a href={url}>{icon}</a>
                    </li>
                )
              })
            }


          </ul>
        </div>
      </nav>
  )
}

export default Navbar
