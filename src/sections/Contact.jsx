import React from 'react'
import contact from '../assets/contact.png'
import instagram from '../assets/instagram.svg'

const Contact = () => {
    return (
        <div id="contact" className="bg-[#156782] mt-20 py-10">
            <h2 className="font-montserrat font-bold text-4xl py-5 md:text-5xl text-[#f1f0e4] md:py-10 text-center" >Contactez-nous</h2>
            <div className='flex md:flex-row-reverse flex-col-reverse justify-evenly w-full '>
                <img
                    src={contact}
                    alt="contact"
                    className='hidden md:block relative w-80 mx-auto md:mx-0 md:w-96 h-auto bg-white text-white shadow-[20px_20px_0px_rgba(0,0,0,0.15)] rounded-[0%_0%_0%_0%_/_0%_0%_0%_0%] transition-all duration-400 ease-out hover:rounded-[0%_0%_50%_50%_/_0%_0%_5%_5%] hover:shadow-[10px_10px_0px_rgba(0,0,0,0.25)]'
                />
                <form className="p-8 md:my-auto bg-white rounded-xl shadow-md font-roboto w-80 my-10 mx-auto md:mx-0 md:w-96">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nom complet
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
                            Téléphone
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="telephone"
                            type="tel"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            // placeholder="Votre message"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button className="px-10 py-2 mx-auto text-base font-bold leading-7 text-white transition-all duration-200 bg-[#156782] border border-transparent rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-fit" >
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-end pt-20 px-10 text-md md:px-20 md:text-xl font-montserrat text-[#f1f0e4]'>
                <div className='mr-10'>
                    <p className='mb-4'>Rabat-Salé, Maroc</p>
                    <p>Téléphone: +212 638-683227</p>
                </div>
                <div>
                    <p>Email: noureddinelassaoui81@gmail.com</p>
                    <div className='flex justify-start mt-6 md:justify-center w-full md:mt-4'>

                        <a href='https://www.instagram.com/nour.tour777/' className='mr-5' target='blank'>
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100064140874867' target='blank'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill='#ff9a23'
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact
