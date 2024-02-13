/** @format */

import React, { useEffect } from "react"
import "./about.css"
import img from "../../Assets/vik.jpg"
import img2 from "../../Assets/ujjain.jpg"
import img3 from "../../Assets/nasik.jpg"
import video from "../../Assets/vikvedio.mp4"
import Aos from "aos"
import "aos/dist/aos.css"

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='about container'>
      <div className='secContainer'>
        <h2 className='title' data-aos='fade-left' data-aos-duration='200'>
          Upcomings
        </h2>
        <div
          className='mainContent container grid'
          data-aos='flip-left'
          data-aos-duration='200'>
          <div className='singleItem'>
            <img src={img} alt='' />
            <h3>Prayagraj Kumbh 2025 </h3>
            <p>
            Prayagraj Kumbh Mela is one of the biggest kumbh mela among all kumbh. In Prayagraj kumbh mela helds in every 6 years near by the confluence point (Sangam)…
            </p>
          </div>
          <div className='singleItem'>
            <img src={img3} alt='' />
            <h3>Nashik Kumbh 2027</h3>
            <p>
            Nashik is located on the banks of river Godavari. Nashik Kumbh held in every 12 years. Nashik is a city that holds a lot of cultural and religious importance for Hindus. …
            </p>
          </div>
          <div className='singleItem'>
            <img src={img2} alt='' />
            <h3>Ujjain Kumbh 2028</h3>
            <p>
            Ujjain is called as the city of Temples sited of the Kshipra River, Ujjain Kumbh is organized in banks of Kshipra River. This city has religious importance from Shri Mahakaleshwar Temple…
            </p>
          </div>
        </div>
        <div
          className='video-cart container'
          data-aos='flip-left'
          data-aos-duration='200'>
          <div className='cart-content grid'>
            <div
              className='cart-text'
              data-aos='zoom-in'
              data-aos-duration='200'>
              <h2>Sangam: Souls Unite, Faith Flourishes!</h2>
              <p>
              २०२५ में प्रयागराज संगम की धरती पर भक्तों का स्वागत, जहाँ श्रद्धा का संगम होता है। 🙏🏽✨
              </p>
            </div>
            <div
              className='cart-video'
              data-aos='fade-right'
              data-aos-duration='200'>
              <video
                src={video}
                autoPlay
                loop
                controls
                muted
                type='video/mp4'></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
