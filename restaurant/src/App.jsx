import React from 'react'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import About from './pages/About'
import hero_aurnaments from './images/about_icon.png'
import Food from './pages/Food'
import Food_vector from './assets/icons/Food_vector.png'

function App() {
  return (
    <div >
    <section className='min-h-screen  hero-background '> 
      <Navbar/>
      <Hero/>

    </section>
      <section className='min-h-screen relative overflow-hidden'>
      <img src={hero_aurnaments}  className=' hidden md:block absolute right-0 md:top-2/3 md:translate-y-1/3 lg:bottom-1/2 lg:-translate-y-1/2  md:w-[150px] xl:w-[208px]'/>
      <About/>
    </section>

    <section className='relative overflow-hidden bg-[#FBF7F2]'>
      <img src={Food_vector}  className=' hidden xl:block absolute left-0 md:top-2/3 md:translate-y-1/3 lg:bottom-1/2 lg:-translate-y-1/2  md:w-[150px] xl:w-[150px] 2xl:w-[208px]'/>
      <Food/>
    </section>
    </div>
  )
}

export default App
