import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
 import { Navigation, Pagination } from 'swiper';

 import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quidem laboriosam eos distinctio nisi ipsam dolor aliquam quae! Illum recusandae perspiciatis ratione necessitatibus quae porro deserunt fugiat adipisci harum officia.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wala',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quidem laboriosam eos distinctio nisi ipsam dolor aliquam quae! Illum recusandae perspiciatis ratione necessitatibus quae porro deserunt fugiat adipisci harum officia.'
  },
  {
    avatar: AVTR3,
    name: 'Kwane Despite',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quidem laboriosam eos distinctio nisi ipsam dolor aliquam quae! Illum recusandae perspiciatis ratione necessitatibus quae porro deserunt fugiat adipisci harum officia.'
  },
  {
    avatar: AVTR4,
    name: 'Swstegger inheriy',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quidem laboriosam eos distinctio nisi ipsam dolor aliquam quae! Illum recusandae perspiciatis ratione necessitatibus quae porro deserunt fugiat adipisci harum officia.'
  },

]

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }} 
      >
        
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt='Avatar1'/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  )
}
