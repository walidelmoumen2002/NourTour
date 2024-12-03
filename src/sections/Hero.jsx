import React, { useState } from 'react';
import vito from '../assets/vito.png'
import { HiArrowSmDown } from "react-icons/hi";
import { Link } from 'react-scroll'
import Comments from './Comments'

const Hero = () => {
    return (
        <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 mx-auto">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                    <div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-montserrat sm:px-2 font-black leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl ">
                                Discover Morocco with
                                <br />
                                <span className="text-[#ff9a23]" >Noure Tour Touristique</span>
                            </h1>
                            <p className="text-base p-4 md:text-lg text-gray-600 sm:mt-8 font-roboto">
                                Discover Morocco’s Hidden Gems and Iconic Landmarks with Noure Tour Touristique. Let our expert drivers guide you through a journey of rich history, vibrant culture, and breathtaking landscapes.</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center mt-2 lg:justify-start sm:space-x-8 w-full mx-auto md:pl-4 md:mx-0">
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                className="flex items-center justify-around px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-[#156782] border border-transparent rounded-xl hover:bg-gray-600 font-roboto mt-4 md:mt-0 md:w-46 cursor-pointer"
                            >
                                About Us
                                <HiArrowSmDown className='text-3xl' />
                            </Link>
                        </div>

                    </div>

                    <div>
                        <img className="w-5/6 mx-auto" src={vito} alt="image vito" />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Hero;