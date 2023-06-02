import React from 'react'
import './style.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonial() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">

0.          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              alsdkfjj jjjjjjls;as ld;fklasdj fksdfjsdkl fsdjfksd fklasd
            </small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            {/* <img src= {IMG2} alt="Avatar One" /> */}
          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              alsdkfjj jjjjjjls;as ld;fklasdj fksdfjsdkl fsdjfksd fklasd
            </small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            {/* <img src= {IMG3} alt="Avatar One" /> */}
          </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              alsdkfjj jjjjjjls;as ld;fklasdj fksdfjsdkl fsdjfksd fklasd
            </small>
          
        </SwiperSlide>
      </Swiper>

    </section>
  )
}

export default Testimonial