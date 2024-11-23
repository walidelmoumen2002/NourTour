import React, { useState } from 'react';
import vito from '../assets/vito.png'
import whatsappLogo from '../assets/whatsappsvg.svg'
import email from '../assets/email.svg'

const Hero = () => {
    return (
        <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 mx-auto">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                    <div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-montserrat font-black leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                                Nour Tour
                                <br />
                                <span className="text-[#ff9a23]" >Casablanca</span>
                            </h1>
                            <p className="text-lg text-gray-600 sm:mt-8 font-roboto">La mission de Nour Tour est le tourisme et le transport dans diverses villes marocaines avec des voyages de haute qualité</p>
                        </div>

                        <div className="flex items-center justify-center mt-6 lg:justify-start sm:space-x-8">
                            <a href='https://api.whatsapp.com/send/?phone=%2B212666941037&text&type=phone_number&app_absent=0' target='blank' className="flex items-center justify-around px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-[#ff9a23] border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-42" >
                                Whatsapp
                                <img src={whatsappLogo} alt="whatsapp logo" className="ml-3 w-8" />
                            </a>

                            <div className="hidden sm:block">
                                <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                    <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                    <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                    <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                    <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                </svg>
                            </div>

                            <button className="flex items-center justify-around px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-[#156782] border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-42" >
                                Email
                                <img src={email} alt="whatsapp logo" className="ml-3 w-8" />
                            </button>
                        </div>
                    </div>

                    <div>
                        <img className="w-5/6" src={vito} alt="image vito" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;