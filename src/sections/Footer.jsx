import React from 'react'
import instagram from '../assets/instagram.svg'
import envelope from '../assets/envelope.svg'
import phone from '../assets/phone-2.svg'
import logo from '../assets/logonour.webp'
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="footer footer-center font-montserrat text-md text-[#f1f0e4] text-base bg-[#156782]" >
            <div id="contact" className="flex flex-col md:flex-row items-center justify-around md:justify-center w-5/6 md:w-4/6 py-10 md:p-0">
                <div className='w-full'>
                    <img className="w-auto h-24 md:h-32" src={logo} alt="logo" />
                    <p className='text-lg font-medium text-left md:pr-24 pt-10'>Please contact us via whatsapp or Email to book your next trip.</p>
                </div>
                <div className='flex justify-between w-full'>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-start">
                        <h6 className='font-montserrat font-bold text-2xl px-3 py-5  md:py-10 '>Company</h6>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="block px-3 py-2 text-base font-medium rounded-md cursor-pointer hover:text-[#ff9a23] transition-all duration-200">
                            About Us
                        </Link>
                        <Link
                            to="why"
                            smooth={true}
                            duration={500}
                            className="block px-3 py-2 text-base font-medium rounded-md cursor-pointer hover:text-[#ff9a23] transition-all duration-200">
                            Why choose us?
                        </Link>
                        <Link
                            to="destinations"
                            smooth={true}
                            duration={500}
                            className="block px-3 py-2 text-base font-medium rounded-md cursor-pointer hover:text-[#ff9a23] transition-all duration-200">
                            Destinations
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="block px-3 py-2 text-base font-medium rounded-md cursor-pointer hover:text-[#ff9a23] transition-all duration-200">
                            Contact
                        </Link>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-start">
                        <h6 className='font-montserrat font-bold text-center text-2xl px-3 py-5   md:py-10 '>Social</h6>
                        <div className='flex mt-6 justify-center w-full '>
                            <a href='https://www.instagram.com/noureddine3557/' className='mr-5' target='blank'>
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href='https://www.facebook.com/share/1BcSSiBRsP/' target='blank'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    color='#fff'
                                    className="fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div >
            </div >
            <aside className='border-t-2 text-sm md:text-base w-full py-4 text-white'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Nour Tour</p>
            </aside>
        </footer >
    )
}

export default Footer
