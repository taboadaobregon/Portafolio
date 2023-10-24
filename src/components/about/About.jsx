import React from 'react'
import './about.css'
import ME from '../../assets/taboada.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
export const About = () => {
  return (
    <section id='about'>
      <h5>Get Ti Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiencie</h5>
              <small>1+ years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1+ years working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>


          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima dignissimos, omnis facere non voluptatibus ducimus
            accusantium tenetur sed assumenda labore? Distinctio eum,
            ducimus atque voluptatibus quidem ut maxime cumque quae.
          </p>

          <a href="#contact" className='btn btn-primary'>let's Talk</a>
        </div>


      </div>
    </section>
  )
}
