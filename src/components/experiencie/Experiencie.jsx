import React from 'react'
import './experiencie.css'
import { BsPatchCheckFill } from 'react-icons/bs'

export const Experiencie = () => {
  return (
    <section id='experiencie'>
      <h5> What skills I have</h5>
      <h2>My Experiencie</h2>

      <div className="container experiencie__container">
        <div className="experiencie__fronted">
          <h3>Fronted Development</h3>
          <div className="experiencie__content">
            <article className='experiencie__details'>
              <BsPatchCheckFill className="experiencie__details-icon"/>
              <div>
                <h4>Html</h4>
                <small className='text-ligth'>Experiencied</small>
              </div>

            </article>

            <article className='experiencie__details'>
              <BsPatchCheckFill className="experiencie__details-icon"/>
              <div>
                <h4>Css</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>

            <article className='experiencie__details'>
              <BsPatchCheckFill className="experiencie__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>

            </article>

            <article className='experiencie__details'>
              <BsPatchCheckFill className="experiencie__details-icon"/>
              <div>
                <h4>Github</h4>
                <small className='text-ligth'>Experiencied</small>
              </div>
            </article>

            <article className='experiencie__details'>
              <BsPatchCheckFill className="experiencie__details-icon"/>
              <div>
                <h4>React</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>

            </article>

            <article className='experiencie__details'>
              <BsPatchCheckFill className="experiencie__details-icon"/>
              <div>
                <h4>Angular</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>

            </article>
          </div>
        </div>

        {/* END OF FRONTED*/}

        <div className="experiencie__backend">
          <h3>Backend Development</h3>
          <div className="experiencie__content">
            <article className='experiencie__details'>
              <BsPatchCheckFill className="experiencie__details-icon"/>
              <div>
                <h4>SQL</h4>
                <small className='text-ligth'>Experiencied</small>
              </div>

            </article>

            <article className='experiencie__details'>
              <BsPatchCheckFill className="experiencie__details-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>

            <article className='experiencie__details'>
              <BsPatchCheckFill className="experiencie__details-icon"/>
              <div>
                <h4>Phython</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>

            </article>

            <article className='experiencie__details'>
              <BsPatchCheckFill className="experiencie__details-icon"/>
              <div>
                <h4>Node JS</h4>
                <small className='text-ligth'>Experiencied</small>
              </div>

            </article>
          </div>
        </div>

        {/* END OF BACKEND */}
      </div>


    </section>
  )
}
