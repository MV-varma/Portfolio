import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './Skills/page'
import Projects from './Projects/page'
import Contact from './Contact/page'
import Education from './Education/page'
import Tail from './components/Tail'


const page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black container mx-auto px-4 py-4">
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