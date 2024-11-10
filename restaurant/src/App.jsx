import React from 'react'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import About from './pages/About'

function App() {
  return (
    <div >
    <section className='min-h-screen  hero-background '> 
      <Navbar/>
      <Hero/>
    </section>
    <section className='min-h-screen bg-red-200 overflow-hidden'>
      <About/>
    </section>
    </div>
  )
}

export default App
