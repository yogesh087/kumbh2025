/** @format */

import React, { useEffect } from "react"
import "./offers.css"
import {
  MdKingBed,
  MdBathtub,
  MdAirportShuttle,
  MdLocationOn,
} from "react-icons/md"
import { FaWifi } from "react-icons/fa"
import { BsArrowRightShort } from "react-icons/bs"
import img5 from "../../Assets/saini.jpg"
import img6 from "../../Assets/sugam.jpg"
import img7 from "../../Assets/maxhotel.jpg"
import Aos from "aos"
import "aos/dist/aos.css"

function Offers() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const offers = [
    {
      id: 1,
      imgSrc: img5,
      destDetail: "Saini Dharamshala",
      location: "Prayagraj, Jhunsi bypass",
      price: " Rs 100/-",
    },
    {
      id: 2,
      imgSrc: img6,
      destDetail: "Sugam Dharamshala",
      location: "Near Jhunsi Railway Station",
      price: "Rs 80/-",
    },
    {
      id: 3,
      imgSrc: img7,
      destDetail: "Max Hotel",
      location: " Near Rambhag railway station",
      price: "Rs 2500/- per day",
    },
  ]
  return (
    <section className='offer container section'>
      <div className='secContainer'>
        <div className='secIntro' data-aos='fade-left' data-aos-duration='200'>
          <h2 className='secTitle'>Accommodation</h2>
          <p>
            We have a wide range of offers for you. We are here to help you find
            the best deals on your favorite products and services in all Over
            in India
          </p>
        </div>
        <div className='mainContent grid'>
          {offers.map(({ id, imgSrc, destDetail, location, price }) => {
            return (
              <div
                className='singleOffer'
                key={id}
                data-aos='fade-down'
                data-aos-duration='200'>
                <div className='detImage'>
                  <img src={imgSrc} alt={destDetail} />
                 
                </div>
                <div className='offerBody'>
                  <div className='price flex'>
                    <h4>{price}</h4>
                    <span className='status'>For Rent</span>
                  </div>
                  <div className='flex amenities'>
                    <div className='singleAmenity flex'>
                      <MdKingBed className='icon' />
                      <small>2 Beds</small>
                    </div>
                    <div className='singleAmenity flex'>
                      <MdBathtub className='icon' />
                      <small>1 Baths</small>
                    </div>
                    <div className='singleAmenity flex'>
                      <FaWifi className='icon' />
                      <small>Wi- Fi</small>
                    </div>
                    <div className='singleAmenity flex'>
                      <MdAirportShuttle className='icon' />
                      <small>Transport</small>
                    </div>
                  </div>
                  <div className='location'>
                    <MdLocationOn className='icon' />
                    <small>{location}</small>
                  </div>
                  <button className='btn flex'>
                    View Details <BsArrowRightShort className='icon' />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Offers
