import React from 'react'
import instagram from '../assets/instagram.svg'
import { FaPhoneVolume } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import logo from '../assets/logonour.png'
import contact from '../assets/contact.png'
import { Link } from "react-scroll";


const Contact = () => {
    return (
        <div id="contact" className="text-[#f1f0e4] flex flex-col md:flex-row items-center justify-around py-16 md:py-32">
            <div className='font-montserrat'>
                <h2 className="font-bold text-4xl md:text-5xl text-[#156782] text-center pb-10 md:text-start" >Get In Touch</h2>
                <div className="flex w-full flex-col font-montserrat mb-10 md:p-0 md:m-0">
                    <div className=" bg-[#156782] rounded-md hover:shadow-xl flex flex-row items-center h-20  md:text-left px-5 md:px-10 py-3 ">
                        <FaPhoneVolume className='text-4xl mr-4' />
                        <div>
                            <h5 className='text-xl font-bold'>Phone:</h5>
                            <p className='text-sm font-normal'>+212 638-683227</p>
                        </div>
                    </div>
                    <div className="divider "></div>

                    <div className=" bg-[#156782] rounded-md hover:shadow-xl flex flex-row items-center h-20  text-left px-5 md:px-10 py-3 ">
                        <IoIosMail className='text-4xl mr-4' />
                        <div >
                            <h5 className='text-xl font-bold'>Mail:</h5>
                            <p className='text-sm font-normal'>noureddinelassaoui81@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={contact} alt="" className='w-[300px] md:w-[500px]' />
            </div>

        </div >
    )
}

export default Contact
