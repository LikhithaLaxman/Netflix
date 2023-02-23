
import React, { useState } from "react";
import avengers from "../../../../src/assets/avengers.jpg"
import baaghi3 from "../../../../src/assets/baaghi3.jpg"
import bahubali from "../../../../src/assets/bahubali.jpg"
import rrr from "../../../../src/assets/rrr.jpeg"
import super30 from "../../../../src/assets/super30.jpg"
import kgf2 from "../../../../src/assets/kgf2.jpg"
import liger from "../../../../src/assets/liger.jpg"
import video1 from "../../../../src/assets/video1.mp4"
import device1 from "../../../../src/assets/device1.mp4"




const Movie = () => {
    const data = [
        {
          name: "Avengers",
          link: video1,
          image:avengers
        },
        {
          name: "JAANI TERA NAA",
          link: device1,
          image:baaghi3
        },
        {
            name: "baaghi3",
            link: video1,
            image:baaghi3
          },
        {
          name: "Vikram Vedha",
        //   link: video3,
          image:bahubali
        },
        {
          name: "Vikram Vedha",
          link:"../../../assets/avengers.mp4",
          image:liger
        },
        {
          name: "Vikram Vedha",
          link:"../../../assets/avengers.mp4",
          image:rrr
        },
        {
          name: "Vikram Vedha",
          link:"../../../assets/avengers.mp4",
          image:super30
        },
    ]
      const [selected, setSelected]=useState(" ")
    
  return (
   
<div className="hero1">
        <div className="hero1-1"> 
        <div className="item">
          {data.map((links, i) =>{
            return(
              <div className="pics" key={i} >
                <div className="imges" onClick={() =>{
                  return(
                      setSelected(data[i].link)
                  )
                }
              }>
                  <img src={links.image}
                ></img>
                  
                </div>
  
              </div>
            )
          })}
          </div>
        </div>
        <div className="hero1-2">
             <video src={selected} autoPlay controls/>
        </div>
      </div>
  )
 
}

export default Movie