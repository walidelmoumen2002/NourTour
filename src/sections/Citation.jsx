import React from 'react'
import citation from '../assets/citation.png'

const Citation = () => {
    return (
        <div id="citations" className='w-full pt-20 md:py-24'>
            <div className='flex flex-col items-center text-end p-5 md:p-0'>
                <img src={citation} alt="citation" className='w-full mb-4 md:mb-0 md:w-1/2' />
                <h4 className='font-Merriweather italic text-xl md:text-2xl font-semibold text-[#156782]'>"Voyager – cela vous laisse sans voix, puis vous transforme en conteur."</h4>
                <p className='font-Merriweather text-end py-2'><b>Ibn Battuta</b>-Explorateur</p>
            </div>
        </div>
    )
}

export default Citation
