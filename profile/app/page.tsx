import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Tail from './components/Tail'


const page = () => {
  return (
    <div className="flex min-h-screen flex-col container mx-auto px-4 py-4">
     <Navbar />
     <Hero />
     <Skills />
     <Projects />
     <Education />
     <Contact />
     <Tail />
    </div>
  )
}

export default page