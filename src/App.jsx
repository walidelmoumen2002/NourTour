import { useState } from 'react'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Cars from './sections/Cars'
import Why from './sections/Why'
import Citation from './sections/Citation'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {

  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Cars />
      <Why />
      <Citation />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
