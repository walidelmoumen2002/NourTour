import React from 'react'
import logo from '../assets/NourTour-logo-white.png'
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <header className="font-montserrat bg-[#ff9a23]">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                            <img className="w-auto h-32" src={logo} alt="" />
                        </a>
                    </div>

                    <div className="hidden lg:flex  lg:items-center lg:justify-center lg:space-x-16 xl:space-x-22 w-full">
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                            À propos
                        </Link>
                        <Link
                            to="why"
                            smooth={true}
                            duration={500}
                            className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                            Pourquoi nous choisir?
                        </Link>
                        <Link
                            to="testimonials"
                            smooth={true}
                            duration={500}
                            className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                            Citations
                        </Link>
                    </div>

                    <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-5 py-2 cursor-pointer text-base font-bold leading-7 text-white transition-all duration-200 bg-[#156782] border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
