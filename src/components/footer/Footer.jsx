import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href="#" className='footer__logo'>Shiwangi</a>

      <ul className="paralinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Education</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/shiwangi_y"><BsTwitter/></a>
        <a href="https://www.instagram.com/_shivu.yadav_/"><BsInstagram/></a>
        <a href="https://github.com/shiwangiY"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shiwangi Yadav. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer