import React from 'react'
import kia from '../assets/kia.png'
import mercedes from '../assets/mercedes.png'
import skoda from '../assets/skoda.png'
import Dacia from '../assets/Dacia.png'
import Autoplay from "embla-carousel-autoplay"
import { Link } from 'react-scroll'
import { HiArrowSmDown } from "react-icons/hi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Cars = () => {
  return (
    <div id="cars" className=" bg-[#f1f0e4] w-full py-10">
      <div className='container flex flex-col md:flex-row items-center justify-around mx-auto'>
        <div className="w-full lg:w-1/2 p-10 container flex flex-col justify-center">
          <h3 className="font-montserrat font-bold text-5xl text-[#156782] mb-10">Our cars</h3>
          <p className="font-roboto font-light text-[#156782] text-xl leading-7 mb-4" >
            Our main car is the Mercedes Vito, which can accommodate a group of 7 people. We also have secondary cars for 1 to 3 people like Skoda, Mercedes Classe, etc.
          </p>
          <Link
            to="destinations"
            smooth={true}
            duration={500}
            className="px-5 py-2 mt-2 text-lg font-roboto cursor-pointer font-bold leading-7 w-fit text-white transition-all duration-200 bg-[#ff9a23] hover:bg-gray-600 border border-transparent rounded-xl flex items-center justify-around"
            role="button"
          >
            Destinations
            <HiArrowSmDown className='mx-1 text-xl' />
          </Link>
        </div>
        <Carousel
          opts={{
            loop: true,
          }}
          orientation="vertical"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]} className="max-w-md">
          <CarouselContent className="h-[300px]">
            <CarouselItem><img src={kia} alt="kia" /></CarouselItem>
            <CarouselItem><img src={mercedes} alt="mercedes" /></CarouselItem>
            <CarouselItem><img src={skoda} alt="skoda" /></CarouselItem>
            <CarouselItem><img src={Dacia} alt="Dacia" /></CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious className='hidden md:flex' />
          <CarouselNext className='hidden md:flex' /> */}
        </Carousel>
      </div>
    </div >
  )
}

export default Cars
