import React from 'react'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
     <div className='min-h-screen hero-background'> 
      <Navbar/>
      <Hero/>
      </div>
    </div>
  )
}

export default App
