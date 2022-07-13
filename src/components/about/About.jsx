import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg'
import { FaUserGraduate } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaFolderOpen } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <artical className="about__card">
              <FaUserGraduate className='about__icon'/>
              <h5>Education</h5>
              <small>Nit Goa</small>
            </artical>

            <artical className="about__card">
              <FaCode className='about__icon'/>
              <h5>Skills</h5>
              <small>Nit Goa</small>
            </artical>

            <artical className="about__card">
              <FaFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>Nit Goa</small>
            </artical>
          </div>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni optio accusantium debitis praesentium saepe quo suscipit dignissimos delectus consequuntur blanditiis est ea esse ducimus recusandae, deserunt reiciendis quas enim pariatur.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About