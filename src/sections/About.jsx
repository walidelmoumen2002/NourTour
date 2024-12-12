import React from 'react'
import chauffeur from '../assets/chauffeur.webp'
import whatsappLogo from '../assets/whatsappsvg.svg'

const About = () => {
    return (
        <div id="about" className="flex items-center justify-around md:container mx-auto mt-20 md:mt-40">
            <img src={chauffeur} alt="chauffeur" className="md:w-5/12 hidden md:block" />
            <div className="md:w-[50%] px-6 py-20 md:p-16 bg-[#f1f0e4] md:h-96 rounded-xl flex flex-col justify-center">
                <h3 className="font-montserrat font-bold text-5xl text-[#156782] mb-10">About Us</h3>
                <p className="font-roboto font-light text-[#156782] text-xl leading-7 mb-4" >
                    Noure Tour Touristique is your reliable taxi service in Morocco, dedicated to providing safe, comfortable, and convenient transportation. We pride ourselves on our exceptional customer service and commitment to ensuring your travel needs are met. Whether you’re a local resident or a tourist, we are here to serve you 24/7.                </p>
                <a href='https://api.whatsapp.com/send/?phone=%2B212638683227&text&type=phone_number&app_absent=0' target='blank' className="flex items-center justify-around mt-2 px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-[#ff9a23] border border-transparent rounded-xl hover:bg-gray-600 w-fit font-roboto" >
                    Book by Whatsapp
                    <img src={whatsappLogo} alt="whatsapp logo" className="ml-3 w-8" />
                </a>
            </div>
        </div >
    )
}

export default About
