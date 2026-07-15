'use client'
import {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const[isOpen, setIsOpen]= useState(false)

  return (
    <nav className="text-amber-50 p-4 fixed top-0 left-0 z-50 bg-black/75 items-center justify-between flex flex-wrap w-full shadow-md shadow-purple-900/50 ">
        <div className="">
            <h1 className="font-silk text-2xl font-bold transition duration-150 hover:scale-110">
                MV Varma
            </h1>
        </div>

        <button
            className='md:hidden text-amber-50'
            onClick={()=> setIsOpen(!isOpen)}
            >
            {isOpen ? <FaTimes size ={24}/> : <FaBars size={24}/>}
        </button>

        <div className="hidden md:flex  flex-row justify-between gap-8">
            <a href="#About" className="hover:text-amber-50 hover:border-b-2 border-purple-500">
                About
            </a>
             <a href="#Skills" className="hover:text-amber-50 hover:border-b-2 border-purple-500">
                Skills
            </a>
             <a href="#Projects" className="hover:text-amber-50 hover:border-b-2 border-purple-500">
             Projects
            </a>
            <a href="#Education" className="hover:text-amber-50 hover:border-b-2 border-purple-500">
                Education
            </a>
             <a href="#Contact" className="hover:text-amber-50 hover:border-b-2  border-purple-500">
             Contact
            </a>
        </div> 
        {isOpen && (
            <div className='w-full flex flex-col items-center gap-6 pt-6 pb-4 md:hidden border-t border-purple-900/50 mt-4'>
                <a href='#About' onClick={()=> setIsOpen(false)} className="hover:text-purple-400">About</a>
                <a href='#Skills' onClick={()=> setIsOpen(false)} className="hover:text-purple-400">Skills</a>
                <a href='#Projects' onClick={()=> setIsOpen(false)} className="hover:text-purple-400">Projects</a>
                <a href='#Education' onClick={()=> setIsOpen(false)} className="hover:text-purple-400">Education</a>
                <a href='#Contact' onClick={()=> setIsOpen(false)} className="hover:text-purple-400">Contact</a>
            </div>
        )}
    </nav>
  )
}

export default Navbar