/* eslint-disable no-unused-vars */
import React from 'react'
import heroImage from '../images/heroImage.png'
import offerIcon from '../images/Offer.png'
import Button from '../components/ui/Button' 
import vector from '../images/Vector.png'

function Hero() {
  return (
    <section className=" max-w-[1373px] min-h-screen mx-auto flex flex-col  lg:relative  lg:flex-row  gap-14 text-white px-6 py-20">
      <article className='flex flex-col lg:justify-center z-20 gap-10 '>
        <h1 className="font-heading text-5xl md:text-8xl lg:text-9xl lg:pr-10 lg:py-5 lg:bg-gradient-to-r from-transparent to-red-800 ">
          Taste the Authentic <br className='hidden lg:block'/> Saudi Cuisine
        </h1>
        <p className='font-sans text-xl md:w-[559px] md:text-2xl lg:text-[24px] lg:w-[559px]'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
        <Button label="Explore Menu" className='bg-yellow-400 hover:bg-yellow-500 text-black' />
      </article>
      <div className='relative lg:absolute right-0 '>
        <img src={heroImage} alt="hero image" className="relative z-10 w-full" />
        <img src={offerIcon}  className='w-24 absolute bottom-0 right-0 -translate-y-0 z-20 lg:w-32 lg:translate-x-1/2 lg:translate-y-4'/>
        <img src={vector} className="absolute top-0 right-0 -translate-y-1/2 z-0 lg:z-20 lg:translate-x-1/2 lg:-top-2" />
      </div>
    </section>
  );
}

export default Hero
