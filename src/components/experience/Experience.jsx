import React from 'react'
import './experience.css'
import {CgEditBlackPoint} from 'react-icons/cg'

function Experience() {
  return (
    <section id='experience'>
      <h2>My Education</h2>
      <div className="edu__container">
        <artical className="education">
          <div className="edu__head">
          <h3>Class 10th</h3>
          </div>

          <ul className="edu__list">
            <li>
              <CgEditBlackPoint className='edu__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <CgEditBlackPoint className='edu__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <CgEditBlackPoint className='edu__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </artical>
        {/* end of 10th edu */}
        <artical className="education">
          <div className="edu__head">
          <h3>Class 12th</h3>
          </div>

          <ul className="edu__list">
            <li>
              <CgEditBlackPoint className='edu__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <CgEditBlackPoint className='edu__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <CgEditBlackPoint className='edu__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </artical>
        {/* end of 12th edu */}
        <artical className="education">
          <div className="edu__head">
          <h3>B.Tech</h3>
          </div>

          <ul className="edu__list">
            <li>
              <CgEditBlackPoint className='edu__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <CgEditBlackPoint className='edu__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <CgEditBlackPoint className='edu__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </artical>
        {/* end of college edu */}
      </div>
    </section>
  )
}

export default Experience