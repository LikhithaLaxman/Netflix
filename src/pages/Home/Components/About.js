import React, { useEffect, useState } from 'react'
import children from "../../../../src/assets/children.png"
import tv from "../../../../src/assets/tv.png"
import device from "../../../../src/assets/device.png"
import image from "../../../../src/assets/image.jpg"
import video1 from "../../../../src/assets/video1.mp4"
import device1 from "../../../../src/assets/device1.mp4"
import boxshot from "../../../../src/assets/boxshot.png"
// import checkbox from "../../../../src/assets/checkbox.png"
import download from "../../../../src/assets/download.png"



const About = () => {
    // const {circularprogress}=require("@material-ui/core")
    // const[level, setLevel]=useState(0);
    // useEffect(()=>{
    //     const timer=setTimeout(()=>{
    //         setLevel((level)=level>=100 ? 0 : level+10)
    //     },500)
    // })
    return (
        <section className='about'>
            <div className='head1'>
                <div className='content1'>
                    <h1>Enjoy on your TV.</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <img src={tv} alt="" />
                <video src={video1} autoPlay loop muted/>

            </div>
            <div className='head1'>
                <img src={image} alt="" />
                <div className='box'>
                    <img src={boxshot} alt=""/>
                    <div className='text1'>
                        <h1 className='tt'>Stranger Things</h1>
                        <h4 className='tt1'>Downloading....</h4>
                    </div>
                    <div className='load'>
                        <img src={download} alt=""/>
                       {/* <circularprogress value={level}/> */}
                       </div>
                </div>
                <div className='content1'>
                    <h1>Download your shows to watch offline.</h1>
                    <p>Save your favourites easily and always have something to watch.</p>
                    
                </div>


            </div>
            <div className='head2'>
                <div className='content1'>
                    <h1>Watch everywhere.</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <img src={device} alt="" />
                <video src={device1} autoPlay loop muted/>

            </div>
            <div className='head1'>
                <img src={children} alt="" />
                <div className='content1'>
                    <h1>Create profiles for children.</h1>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>


            </div>
        </section>
    )
}

export default About