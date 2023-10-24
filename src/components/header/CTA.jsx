import React from 'react'
import CV from '../../assets/Taboada.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>let's Talk</a>
    </div>
  )
}
