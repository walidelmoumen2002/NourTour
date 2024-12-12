import React from 'react'
import exp from '../assets/exp.webp'
import volant from '../assets/volant.webp'
import option from '../assets/option.webp'

const Why = () => {
    return (
        <div id="why" className="bg-[#156782] ">
            <div className="mx-auto block w-full">
                <h2 className="font-montserrat font-bold md:text-5xl text-4xl text-[#f1f0e4] py-20 md:pt-20 md:pb-0 text-center" >Why <span className="text-[#ff9a23]">Choose</span> Us? </h2>
                <div className="flex flex-col flex-wrap items-center md:flex-row md:justify-evenly py-5 md:py-20 ">
                    <div className="bg-[#f1f0e4] h-80 w-80 flex flex-col items-center rounded-xl p-10 mb-16 md:mb-0 text-center">
                        <img src={exp} alt="icone experience" className="w-20 py-2" />
                        <h3 className="text-xl font-bold font-roboto text-[#156782] py-2">Excellent Customer Experience</h3>
                        <p className="text-[#156782] py-2">Our efforts to provide high level service make our customers happy and satisfied.</p>
                    </div>
                    <div className="bg-[#f1f0e4] h-80 w-80 flex flex-col items-center rounded-xl p-10 mb-16 md:mb-0 text-center">
                        <img src={volant} alt="icone volant" className="w-20 py-2" />
                        <h3 className="text-xl font-bold font-roboto text-[#156782] py-2">High Level Driving</h3>
                        <p className="text-[#156782] py-2">High-level driving makes traveling and transfers more enjoyable.</p>
                    </div>
                    <div className="bg-[#f1f0e4] h-80 w-80 flex flex-col items-center rounded-xl p-10 mb-16 md:mb-0 text-center">
                        <img src={option} alt="icone option" className="w-20 py-2" />
                        <h3 className="text-xl font-bold font-roboto text-[#156782] py-2">Personalized Service</h3>
                        <p className="text-[#156782] py-2">A service adapted to your needs (transfer to a wedding, evenings, etc.).</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why
