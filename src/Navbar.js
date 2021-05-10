import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [showLinks, setShowLinks]= useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() =>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }

  },[showLinks])

  return (
      <nav>
        <div class='nav-center'>
          <div class='nav-header'>
            <img src={logo} alt='logo'/>
            <button class='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
              <FaBars />
            </button>
          </div>
          <div class= 'links-container'
                        ref={linksContainerRef}>
            <ul class='links' ref={linksRef}>
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
