import React, { useEffect } from "react";
import "./popular.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
// import images
import image from "../../Assets/mast.jpg";
import img2 from "../../Assets/bdehanuman.jpg";
import img3 from "../../Assets/triveni.jpg";
import img4 from "../../Assets/chitrakoot.jpg";
import img5 from "../../Assets/ram.jpg";
import img6 from "../../Assets/vara.jpg";
import img7 from "../../Assets/fort.jpg";
import img8 from "../../Assets/nag.jpg";
import img9 from "../../Assets/patal.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

function Popular() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const data = [
    {
      id: 1,
      imgSrc: img2,
      destTitle: "Allahabad",
      location: "Bde Hanuman Mandir",
      // grade: "CULTURAL RELAX",
    },
    {
      id: 2,
      imgSrc: img3,
      destTitle: "Ramghat",
      location: "Chiratkoot",
      grade: "CULTURAL RELAX",
    },
    {
      id: 3,
      imgSrc: img4,
      destTitle: "Prayagraj",
      location: "Triveni sangam",
      grade: "CULTURAL RELAX",
    },
    {
      id: 4,
      imgSrc: img5,
      destTitle: "Ram Mandir",
      location: "Ayodhya",
      grade: "CULTURAL RELAX",
    },
    {
      id: 5,
      imgSrc: img6,
      destTitle: "Manikarnika Ghat",
      location: "Varansi",
      grade: "CULTURAL RELAX",
    },
    {
      id: 6,
      imgSrc: img8,
      destTitle: "Nagvasuki Temple",
      location: "Prayagraj",
      grade: "CULTURAL RELAX",
    },
    {
      id: 7,
      imgSrc: img7,
      destTitle: "Prayagraj Fort",
      location: "Prayagraj",
      grade: "CULTURAL RELAX",
    },
    {
      id: 8,
      imgSrc: img9,
      destTitle: "PatalPuri Temple",
      location: "Prayagraj",
      grade: "CULTURAL RELAX",
    },
  ];
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            className="textDiv"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <h2 className="secTitle text-center">Popular Destination</h2>
            <p>
            ऐतिहासिक शहरों से प्राकृतिक आश्चर्यों तक, देखें दुनिया के सर्वोत्तम!
            </p>
          </div>
          <div
            className="iconsDiv flex"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <AiOutlineArrowLeft className="icon leftIcon" />
            <AiOutlineArrowRight className="icon" />
          </div>
        </div>
        <div className="mainContent grid">
          {data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div
                className="singleDestination"
                key={id}
                data-aos="fade-up"
                data-aos-duration="200"
              >
                <div className="destImage">
                  <img src={imgSrc} alt="" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <AiOutlineArrowRight className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot"> 
                        {/* <BsDot className='icon' /> */}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Popular;
