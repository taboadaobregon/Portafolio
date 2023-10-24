import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {

  const form = useRef();
  const Swal = require('sweetalert2')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_645x0ig', 'template_gx0sny6', form.current, 'hF1kEvxVsLZMESbUI')
    .then((result)=>{
      console.log(result);
      if(result){
        Swal.fire({
          position: 'Center',
          icon: 'success',
          title: 'Se envio el mensaje',
          showConfirmButton: false,
          timer: 1500
        })
      }
      
    })

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>adrestaboadaa@gmail.com</h5>
            <a href="mailto:adrestaboadaa@gmail.com">Send a Message</a>

          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Andres Taboada</h5>
            <a href="https://m.me/developer1994" target="__blank">Send a Messenger</a>

          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>+51960061506</h5>
            <a href="https://api.whatsapp.com/send?phone+51960061506" target='__blank'>Send a Whatsapp</a>

          </article>
        </div>
        {/* End Of contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name'  required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}
