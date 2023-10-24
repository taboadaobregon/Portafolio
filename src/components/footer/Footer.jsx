import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Andres</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#bout">About</a></li>
        <li><a href="#experiencie">Experiencie</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com"><BsFacebook/></a>
        <a href="https://www.instagram.com"><BsInstagram/></a>
        <a href="https://www.twiter.com"><BsTwitter/></a>
      </div>

      <div className="footer__copyrigth">
        <small>&copy;Andres Tutorials. All rigths reserved</small>
      </div>
    </footer>
  )
}
