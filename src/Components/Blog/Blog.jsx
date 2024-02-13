/** @format */

import React, { useEffect } from "react"
import "./blog.css"
import { BsArrowRightShort } from "react-icons/bs"
import img from "../../Assets/blog1.jpg"
import img2 from "../../Assets/blog2.jpg"
import img3 from "../../Assets/blog3.jpg"
import img4 from "../../Assets/blog4.jpg"
import Aos from "aos"
import "aos/dist/aos.css"

function Blog() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const posts = [
    {
      id: 1,
      postImg: img,
      title: "Pryagraj: Where the river's song meets the echoes of eternity.",
      des: "Timeless saga of the river, Pryagraj's shores become the whispered pages where history's ink merges with the gentle flow of eternity.Where the sacred confluence of rivers narrates the ancient hymns of faith.",
    },
    {
      id: 2,
      postImg: img2,
      title: "Bathing in the mystical embrace of the night at Sangam 🌙✨",
      des: "Beneath the veil of night, Sangam's waters become a sacred canvas, inviting souls to immerse in the tranquil whispers of the universe.As the world sleeps, Sangam's ghat becomes a sanctuary for seekers.",
    },
    {
      id: 3,
      postImg: img3,
      title: "Finding solace in the sacred chant of 'Om Namah Shivaya'",
      des: " In 'Om Namah Shivaya,' find solace and grace, A sanctuary within, a sacred space. For in the divine chant, there lies the key, To unlock the gates of serenity. 'Om Namah Shivaya,' the mantra of divine connection.",
    },
    {
      id: 4,
      postImg: img4,
      title: "Worship is All",
      des: "In the depths of worship, hearts find their sacred rhythm,Amidst whispers of devotion, souls embrace the divine hymn.In reverence, we surrender, to the vastness of the unseen,For in worship's embrace, we find where the sacred and mundane convene.",
    },
  ]
  return (
    <section className='blog container section'>
      <div className='secContainer'>
        <div className='secIntro' data-aos='fade-down' data-aos-duration='200'>
          <h2 className='secTitle'>Our Best Blog?</h2>
          <p>दुनिया में अद्वितीय अनुभव की एक अनूठी देखभाल। साथ में आइए और आनंद लें।</p>
        </div>
        <div className='mainContainer grid'>
          {posts.map(({ id, postImg, title, des }) => {
            return (
              <div
                className='singlePost grid'
                key={id}
                data-aos='zoom-in'
                data-aos-duration='200'>
                <div className='imgDiv'>
                  <img src={postImg} alt={title} />
                </div>
                <div className='postDetails'>
                  <h3>{title}</h3>
                  <p>{des} </p>
                </div>
                <a href='#' className='flex'>
                  Read More
                  <BsArrowRightShort className='icon' />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog
