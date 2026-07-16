import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaRegCopyright} from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'


const Tail = () => {
  return (
    <footer className='flex flex-col relative align-bottom bg-black self-center justify-between gap-4 p-4'>
        <div className="flex gap-4 justify-center ">

            <a 
            href='https://github.com/MV-varma' 
            target='_blank'
            rel='noopener noreferrer'
            className="transform transition-transform duration-300 hover:scale-125 hover:text-purple-500"
            >
                <FaGithub size={24} />
            </a>

            <a 
            href='https://linkedin.com/in/m-v-varma'
            target='_blank'
            rel='noopener noreferrer'
            className="transform transition-transform duration-300 hover:scale-125 hover:text-purple-500"
            >
                <FaLinkedin size={24} />
            </a>

            <a 
            href='https://instagram.com/_mv_varma'
            target='_blank'
            rel='noopener noreferrer'
            className="transform transition-transform duration-300 hover:scale-125 hover:text-purple-500"
            >
                <FaInstagram size={24} />
            </a>

            <a 
            href='mailto:yroasting66@gmail.com' 
            className="transform transition-transform duration-300 hover:scale-125 hover:text-purple-500"
            >
                <IoMail size={24} />
            </a>

        </div>
        <div className="flex items-center justify-center gap-1 text-sm ">
            <FaRegCopyright size={12} />
            <span>{new Date().getFullYear()} Mayank. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Tail