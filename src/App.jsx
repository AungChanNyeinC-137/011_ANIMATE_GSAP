import React from 'react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(SplitText, ScrollTrigger);
const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-5xl text-red-500'>HELLO REACT, TAILWIND, GSAP!</h1>
      </div>
  )
}

export default App