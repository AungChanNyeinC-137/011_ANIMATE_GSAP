import React from 'react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/navbar';
import Hero from './components/Hero';
gsap.registerPlugin(SplitText, ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className='h-dvh bg-black'/>
    </main>
  )
}

export default App