import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Paises.jpg'
import IMG2 from '../../assets/Maps.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Busqueda de Paises y regiones',
    github: 'https://github.com/taboadaobregon/Angular_Paises',
    demo: 'https://paiseswebb.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Integracion de Mapas',
    github: 'https://github.com/taboadaobregon/MapsAngular',
    demo: 'https://mapsappangularr.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20396707-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Figma components and widgets',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20396511-Figma-components-and-widgets'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20396574-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Set of mobile templates for crypto and fintech',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20349272-Set-of-mobile-templates-for-crypto-and-fintech'
  }

]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Word</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='__blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
                </div>
              </article>

            )

          })
        }
      </div>
    </section>
  )
}
