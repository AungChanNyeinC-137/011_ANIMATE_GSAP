import React from 'react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/navbar';
gsap.registerPlugin(SplitText, ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar/>
    </main>
  )
}

export default App