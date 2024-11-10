import React from 'react'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import About from './pages/About'
import hero_aurnaments from './images/about_icon.png'
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
    </div>
  )
}

export default App
