import React from 'react'
import exp from '../assets/exp.png'
import volant from '../assets/volant.png'
import option from '../assets/option.png'

const Why = () => {
    return (
        <div className="bg-[#156782] mt-52">
            <div className="mx-auto block w-full">
                <h2 className="font-montserrat font-bold text-5xl text-[#f1f0e4] py-10 text-center" >Pourquoi Nous <span className="text-[#ff9a23]">Choisir?</span>  </h2>
                <div className="flex justify-evenly py-20">
                    <div className="bg-[#f1f0e4] w-80 flex flex-col items-center rounded-xl p-10">
                        <img src={exp} alt="icone experience" className="w-20 py-2" />
                        <h3 className="text-xl font-bold font-roboto text-[#156782] py-2">Excellente Expérience Client</h3>
                        <p className="text-[#156782] py-2">Nos efforts pour fournir un service de haut niveau rendent nos clients heureux et satisfaits.</p>
                    </div>
                    <div className="bg-[#f1f0e4] w-80 flex flex-col items-center rounded-xl p-10">
                        <img src={volant} alt="icone volant" className="w-20 py-2" />
                        <h3 className="text-xl font-bold font-roboto text-[#156782] py-2">Conduite de Haut Niveau</h3>
                        <p className="text-[#156782] py-2">La conduite de haut niveau rend les voyages et les transferts plus agréables.</p>
                    </div>
                    <div className="bg-[#f1f0e4] w-80 flex flex-col items-center rounded-xl p-10">
                        <img src={option} alt="icone option" className="w-20 py-2" />
                        <h3 className="text-xl font-bold font-roboto text-[#156782] py-2">Service Personnalisé</h3>
                        <p className="text-[#156782] py-2">Une prestation adaptée à vos besoins (transfert à un mariage, soirées, etc.).</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why
