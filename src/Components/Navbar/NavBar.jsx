/** @format */

import React, { useEffect, useState } from "react"
import "./navbar.css"
import { SiYourtraveldottv } from "react-icons/si"
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
// import { Link } from 'react-router-dom';
import Aos from "aos"
import "aos/dist/aos.css"
import logoImage from "../../Assets/sar.png";

function NavBar() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [active, setActive] = useState("navBar")
  const showNav = () => {
    setActive("navBar activeNavbar")
  }
  const closeNav = () => {
    setActive("navBar")
  }

  const [transparent, setTransparent] = useState("header")
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader")
    } else {
      setTransparent("header")
    }
  }
  window.addEventListener("scroll", addBg)
  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className='logoDiv' data-aos='flip-left' data-aos-duration='200'>
          <a href='#' className='logo'>
            <h1 className='flex'>
              {/* <SiYourtraveldottv className='icon' /> */}
             
              {/* <img src="../../Assets/yogi.jpg" /> */}
              {/* <img src={logoImage} alt="Logo" /> */}
              {/* <img src={logoImage} alt="Logo" style={{ maxWidth: "40px", height: "auto" }} /> */}
              <img src={logoImage} alt="Logo" style={{ maxWidth: "80px", height: "auto", backgroundColor: "transparent" }} />


               कुम्भ
            </h1>
          </a>
        </div>

        <div className={active} data-aos='fade-down' data-aos-duration='400'>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Home
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                About
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Upcomings
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Blog
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Contact
              </a>
            </li>
            <div
              className='headerBtns flex'
              data-aos='fade-up'
              data-aos-duration='200'>
              <button className='loginBtn btn'>
                <a href='#'>Login</a>
              </button>
              <button className='btn'>
              <a href='#'>Signup</a>
              </button>
            </div>
          </ul>
          <div
            onClick={closeNav}
            className='closeNavbar'
            data-aos='fade-up'
            data-aos-duration='200'>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div
          onClick={showNav}
          className='toggleNavbar'
          data-aos='fade-down'
          data-aos-duration='200'>
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  )
}

export default NavBar
