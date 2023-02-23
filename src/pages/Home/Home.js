import React from 'react'
import Footer from '../../Componets/Navbar/Footer/Footer'
import Navbar from '../../Componets/Navbar/Navbar'
import About from './Components/About'
import Faq from './Components/Faq'
import Hero from './Components/Hero'
import Movie from './Components/Movie'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Movie/>
   <Faq/>
   <Footer/>
   </>
  )
}

export default Home