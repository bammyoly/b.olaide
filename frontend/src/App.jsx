import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Experience />
      <Services />
      <TechStack />
      <Contact />
    </>
  )
}

export default App
