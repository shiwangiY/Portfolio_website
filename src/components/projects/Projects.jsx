import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'title of the project',
    github: 'https://github.com/shiwangiY/pos-app',
    demo: 'https://github.com/shiwangiY/pos-app'
  },
  {
    id: 2,
    image: IMG3,
    title: 'title of the project',
    github: 'https://github.com/shiwangiY/pos-app',
    demo: 'https://github.com/shiwangiY/pos-app'
  },
  {
    id: 3,
    image: IMG4,
    title: 'title of the project',
    github: 'https://github.com/shiwangiY/pos-app',
    demo: 'https://github.com/shiwangiY/pos-app'
  },
  {
    id: 4,
    image: IMG1,
    title: 'title of the project',
    github: 'https://github.com/shiwangiY/pos-app',
    demo: 'https://github.com/shiwangiY/pos-app'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h2>My Projects</h2>

      <div className="container project__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="project__item">
          <div className="proj__item-img">
            <img src={image} alt={title} />
          </div>
                <h3>{title}</h3>
          <div className="proj__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Projects