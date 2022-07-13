import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import {TbTools} from 'react-icons/tb'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { GiNotebook } from 'react-icons/gi'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" id='tooltip' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/> <span class="tooltiptext">Home</span></a>
      <a href="#about" id='tooltip' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/><span class="tooltiptext">About</span></a>
      <a href="#skills" id='tooltip' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><TbTools/><span class="tooltiptext">Skills</span></a>
      <a href="#experience" id='tooltip' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWorkOutline/><span class="tooltiptext">Experience</span></a>
      <a href="#projects" id='tooltip' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><GiNotebook/><span class="tooltiptext">Projects</span></a>
      <a href="#contact" id='tooltip' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/><span class="tooltiptext">Contacts</span></a>
   </nav>
  )
}

export default Nav