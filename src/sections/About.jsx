import React from 'react'
import chauffeur from '../assets/chauffeur.png'

const About = () => {
    return (
        <div className="flex items-center justify-around container mx-auto mt-40">
            <img src={chauffeur} alt="chauffeur" className="w-5/12" />
            <div className="w-[42%] p-10 bg-[#f1f0e4] h-96 rounded-xl flex flex-col justify-center">
                <h3 className="font-montserrat font-bold text-5xl text-[#156782] mb-10">À propos</h3>
                <p className="font-roboto font-light text-[#156782] text-xl leading-7 mb-4" >
                    Nour Tour Tourist Transport situé à Casablanca offre un transfert pratique vers toutes les villes marocaines, Avec Nour Tour réservée un taxi privé aeroport Casablanca vers centre ville et toutes les destinations au Maroc.
                </p>
                <a href="#" title="" className="px-5 py-2 text-xl font-roboto font-light leading-7 w-fit text-white transition-all duration-200 bg-[#ff9a23] hover:bg-[#156782] border border-transparent rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                    Réserver
                </a>
            </div>
        </div >
    )
}

export default About
