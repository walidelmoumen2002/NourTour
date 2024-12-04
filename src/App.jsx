import { useState, useEffect } from 'react'
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
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {showButton && (
        <Link
          to="navbar"
          smooth={true}
          duration={700}
          className="fixed bottom-5 text-3xl right-4 p-4 bg-[#ff9a23] text-[#156782] animate-in rounded-full md:hidden"
        >
          <FaArrowUp />

        </Link>
      )}
    </div>
  )
}

export default App
