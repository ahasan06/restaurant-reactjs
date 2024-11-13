/* eslint-disable no-unused-vars */
import React from 'react'
import heroImage from '../images/heroImage.png'
import offerIcon from '../images/Offer.png'
import Button from '../components/ui/Button' 
import vector from '../images/Vector.png'

function Hero() {
  return (
    <section className=" max-w-[1373px] min-h-[648px] xl:min-h-screen flex flex-col justify-center lg:justify-normal px-6  pb-6 lg:pb-0 gap-6 mx-auto   md:relative  lg:flex-row  text-white ">

      <article className='flex flex-col gap-6 md:justify-center z-20  '>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl xl:text-9xl md:pr-10 lg:py-5 lg:bg-gradient-to-r from-transparent to-red-800 ">
          Taste the Authentic <br className='hidden md:block'/> Saudi Cuisine
        </h1>
        <p className='font-sans text-xl md:w-[500px] lg:w-[450px] xl:w-[559px] md:text-2xl md:text-[24px] '>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
        <Button label="Explore Menu" className='bg-yellow-400 hover:bg-yellow-500 text-black' />
      </article>

      <aside className='relative lg:absolute right-0 lg:right-10 2xl:right-0 md:top-1/2 lg:-translate-y-1/2  lg:w-[50%] 2xl:w-auto '>
        <img src={heroImage} alt="hero image" className="relative z-10 w-full" />
        <img src={offerIcon}  className='w-24 absolute bottom-0 right-0 -translate-y-0 z-20 lg:w-32 xl:translate-x-1/2 xl:translate-y-4'/>
        <img src={vector} className="absolute top-0 right-0 -translate-y-1/2 z-0 xl:z-20 xl:translate-x-1/2 xl:-top-2" />
      </aside>

    </section>
  );
}

export default Hero

