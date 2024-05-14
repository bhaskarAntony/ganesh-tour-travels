import React from 'react'
import './style.css'
import Registration from '../register/Registration'

function Hero() {
  return (
    <section className='hero text-center p-3 p-md-5 d-flex justify-content-center flex-column'>
        <h1 className='italic-heading display-4' data-aos="fade-up">Best Deals Package</h1>
        <h1 className="heading display-2 fw-bold mb-5" data-aos="fade-up">Unforgettable Weekend Chikkaballapur  Best Offer Tour</h1>
        <div className="tour d-flex gap-2 align-items flex-wrap justify-content-center mb-5">
            <button className='btn btn-warning rounded-pill' data-aos="zoom-in">Nandi Hills <i class="bi bi-arrow-right"></i></button>
            <button className='btn btn-warning rounded-pill' data-aos="zoom-in">Subramanai Ghati <i class="bi bi-arrow-right"></i></button>
            <button className='btn btn-warning rounded-pill' data-aos="zoom-in">Isha Foundation (Laser Show)</button>
        </div>
        <Registration/>
    </section>
  )
}

export default Hero