import { useState } from 'react'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Cars from './sections/Cars'
import Why from './sections/Why'
import Citation from './sections/Citation'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Destinations from './sections/Destinations'
import Comments from './sections/Comments'

function App() {

  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <div className='bg-[#f1f0e4] md:mt-24'>
        <Comments />
        <Cars />
      </div>
      <Citation />
      <div className='bg-[#156782] mt-24'>
        <Why />
        <Destinations />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
