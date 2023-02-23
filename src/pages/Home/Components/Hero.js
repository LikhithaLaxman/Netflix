import React from 'react'
import "../../Home/Home.css"
import shiv from "../../../../src/assets/shiv.jpg"

const Hero = () => {
  return (
   
    <div className='lik'> 
    <img src={shiv} alt=""/>
    <section className='Hero'>
    <h1 className='text'>Unlimited movies, TV<span>shows and more.</span> </h1>
    <h2>Watch anywhere. Cancel anytime.</h2>
    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
    <div className='hero'>
    <input type="text" placeholder='Enter your email'></input>
    <button>Get Started </button>
    </div>
    
    </section>
    </div> 

  
  )
}

export default Hero