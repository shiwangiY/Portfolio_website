import React from 'react'
import './skills.css'
import { RiHtml5Fill } from 'react-icons/ri'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import { RiCss3Fill } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io'
import { SiBootstrap } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import { RiAngularjsFill } from 'react-icons/ri'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMongodb } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import {SiFirebase} from 'react-icons/si'

const Skills = () => {
  return (
    <section id='skills'>
      <h3>What Skills I Have</h3>

      <div className="container skills_container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <div className="skills__details">
              <RiHtml5Fill className='skills__details-icons' />
              <h4>HTML</h4>
            </div>
            <div className="skills__details">
              <RiCss3Fill className='skills__details-icons' />
              <h4>CSS</h4>
            </div>
            <div className="skills__details">
              <IoLogoJavascript className='skills__details-icons' />
              <h4>JavaScript</h4>
            </div>
            <div className="skills__details">
              <SiBootstrap className='skills__details-icons' />
              <h4>Bootstrap</h4>
            </div>
            <div className="skills__details">
              <RiReactjsLine className='skills__details-icons' />
              <h4>ReactJs</h4>
            </div>
            <div className="skills__details">
              <RiAngularjsFill className='skills__details-icons' />
              <h4>AngularJs</h4>
            </div>
          </div>
        </div>
{/* End of front end*/}
        <div className="skills__backend">
        <h3>Backend Dev & others</h3>
          <div className="skills__content">
            <div className="skills__details">
              <IoLogoNodejs className='skills__details-icons' />
              <h4>Node JS</h4>
            </div>
            <div className="skills__details">
              <SiMongodb className='skills__details-icons' />
              <h4>MongoDB</h4>
            </div>
            <div className="skills__details">
              <BsFillPatchCheckFill className='skills__details-icons' />
              <h4>C++</h4>
            </div>
            <div className="skills__details">
              <FaPython className='skills__details-icons' />
              <h4>Python</h4>
            </div>
            <div className="skills__details">
              <GrMysql className='skills__details-icons' />
              <h4>MySQL</h4>
            </div>
            <div className="skills__details">
              <SiFirebase className='skills__details-icons' />
              <h4>Firebase</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills