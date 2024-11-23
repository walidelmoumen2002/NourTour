import React from 'react'
import kia from '../assets/kia.png'
import mercedes from '../assets/mercedes.png'
import skoda from '../assets/skoda.png'
import Autoplay from "embla-carousel-autoplay"
import { Link } from 'react-scroll'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Cars = () => {
  return (
    <div id="cars" className="mt-40 bg-[#f1f0e4] w-full py-10">
      <div className='container flex flex-col md:flex-row items-center justify-around mx-auto'>
        <div className="w-full md:w-1/2 p-10 container flex flex-col justify-center">
          <h3 className="font-montserrat font-bold text-5xl text-[#156782] mb-10">Nos voitures</h3>
          <p className="font-roboto font-light text-[#156782] text-xl leading-7 mb-4" >
            Notre voiture principale est le Mercedes Vito, qui peut accueillir un groupe de 7 personnes. Nous avons aussi des voitures secondaires pour 1 à 3 personnes comme Skoda, Mercedes Classe, etc.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-5 py-2 mt-2 text-base font-roboto cursor-pointer font-bold leading-7 w-fit text-white transition-all duration-200 bg-[#ff9a23] hover:bg-gray-600 border border-transparent rounded-xl "
            role="button"
          >
            Contactez-nous
          </Link>
        </div>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]} className="max-w-md ">
          <CarouselContent className="">
            <CarouselItem><img src={kia} alt="kia" /></CarouselItem>
            <CarouselItem><img src={mercedes} alt="mercedes" /></CarouselItem>
            <CarouselItem><img src={skoda} alt="skoda" /></CarouselItem>
          </CarouselContent>
          <CarouselPrevious className='hidden md:flex' />
          <CarouselNext className='hidden md:flex' />
        </Carousel>
      </div>
    </div >
  )
}

export default Cars
