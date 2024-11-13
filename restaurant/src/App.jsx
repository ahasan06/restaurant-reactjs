import React from 'react'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import About from './pages/About'
import hero_aurnaments from './images/about_icon.png'
import Food from './pages/Food'
import Food_vector from './assets/icons/Food_vector.png'
import BookTable from './pages/BookTable'
import Review from './pages/Review'
import rev_bg1 from './images/review_design1.png'
import rev_bg2 from './images/review_design2.png'

function App() {
  return (
    <div >
    <section className=' hero-background '> 
      <Navbar/>
      <Hero/>

    </section>
      <section className='relative overflow-hidden'>
      <img src={hero_aurnaments}  className=' hidden md:block absolute right-0 md:top-2/3 md:translate-y-1/3 lg:bottom-1/2 lg:-translate-y-1/2  md:w-[150px] xl:w-[208px]'/>
      <About/>
    </section>

    <section className='relative overflow-hidden bg-[#FBF7F2]'>
      <img src={Food_vector}  className=' hidden xl:block absolute left-0 md:top-2/3 md:translate-y-1/3 lg:bottom-1/2 lg:-translate-y-1/2  md:w-[150px] xl:w-[150px] 2xl:w-[208px]'/>
      <Food/>
    </section>

    <section className='relative book_table_bg'>
      <BookTable/>
    </section>

    <section className='relative overflow-hidden '>
      <img src={rev_bg2}  className=' hidden 2xl:block absolute left-0 md:top-0 md:translate-y-1/3 lg:bottom-1/2 lg:translate-y-1/2  md:w-[150px] xl:w-[150px] 2xl:w-[150px]'/>
      <img src={rev_bg1}  className=' hidden 2xl:block absolute right-0 md:top-0 md:translate-y-1/3 lg:bottom-1/2 lg:translate-y-1/2   '/>
      <Review/>
    </section>

    </div>
  )
}

export default App
