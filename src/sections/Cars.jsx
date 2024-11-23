import React from 'react'
import kia from '../assets/kia.png'
import mercedes from '../assets/mercedes.png'
import skoda from '../assets/skoda.png'
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Cars = () => {
  return (
    <div className="mt-40 bg-[#f1f0e4] w-full py-10">
      <div className='container flex items-center justify-around mx-auto'>
        <div className="w-1/2 p-10 container flex flex-col justify-center">
          <h3 className="font-montserrat font-bold text-5xl text-[#156782] mb-10">Nos voitures</h3>
          <p className="font-roboto font-light text-[#156782] text-xl leading-7 mb-4" >
            Notre voiture principale est le Mercedes Vito, qui peut accueillir un groupe de 7 personnes. Nous avons aussi des voitures secondaires pour 1 à 3 personnes comme Skoda, Mercedes Classe, etc.        </p>
          <a href="#" title="" className="px-5 py-2 text-xl font-roboto font-light leading-7 w-fit text-white transition-all duration-200 bg-[#ff9a23] hover:bg-[#156782] border border-transparent rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
            Réserver
          </a>
        </div>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]} className="max-w-md">
          <CarouselContent className="">
            <CarouselItem><img src={kia} alt="kia" /></CarouselItem>
            <CarouselItem><img src={mercedes} alt="mercedes" /></CarouselItem>
            <CarouselItem><img src={skoda} alt="skoda" /></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div >
  )
}

export default Cars
