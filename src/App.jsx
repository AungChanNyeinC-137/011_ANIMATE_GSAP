import React from 'react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
gsap.registerPlugin(SplitText, ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
    </main>
  )
}

export default App