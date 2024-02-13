/** @format */

import React, { useEffect } from "react"
import "./home.css"
import Aos from "aos"
import "aos/dist/aos.css"
function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>
          <h1 data-aos='fade-up' className='title'>
            Welcome to कुम्भ Mela 2025 
          </h1>
          <p data-aos='fade-up' data-aos-duration='600' className='subtitle'>
            Travel To Your Favourite worship place with Respectful of the Enviroment in 2025
          </p>
          <button data-aos='fade-up' data-aos-duration='800' className='btn'>
            <a href='#'>Explore Now</a>
          </button>
        </div>
        <div className='homeCart grid'>
          <div
            data-aos='fade-left'
            data-aos-duration='800'
            className='locationDiv'>
            <label htmlFor='location'>Name</label>
            <input type='text' placeholder='Enter the Name' />
          </div>
          <div data-aos='fade-left' data-aos-duration='800' className='distDiv'>
            <label htmlFor='distance'>Email</label>
            <input type='text' placeholder='Enter the email' />
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='800'
            className='priceDiv'>
            <label htmlFor='price'>Phone no.</label>
            <input type='text' placeholder='Enter the Phone No.' />
          </div>
          <div data-aos='fade-left' data-aos-duration='800' className='distDiv'>
            <label htmlFor='distance'>Message</label>
            <input type='text' placeholder='Enquiry message' />
          </div>
          <button
            data-aos='fade-right'
            data-aos-duration='1000'
            className='btn'>
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
