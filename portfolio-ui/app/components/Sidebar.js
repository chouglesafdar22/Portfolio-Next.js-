"use client"
import React, { useState } from 'react'
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { motion } from "motion/react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const closedSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <motion.button initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:0.8, ease:"easeIn"}} onClick={() => setIsOpen(true)} className='fixed top-5 cursor-pointer left-8'><IoIosMenu className='lg:size-14 size-10 sm:size-12 text-white' /></motion.button>
        <div className={`fixed top-0 left-0 h-screen bg-black text-white transition-all duration-300 ease-in-out z-40 ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}>
          <div className='flex justify-end top-2.5 right-2.5'>
            {/* <button><MdOutlineLightMode size={24} /></button> */}
            <button className='cursor-pointer' onClick={() => setIsOpen(false)}><IoIosClose className='lg:size-13 size-11 sm:size-12' /></button>
          </div>
          <nav className='flex items-center h-full w-full justify-center'>
            <ul className='flex flex-col font-medium font-mono lg:text-4xl sm:text-3xl text-2xl items-center justify-center gap-6 m-0 p-0'>
              <a href="#home" onClick={closedSideBar} className='hover:underline hover:text-gray-400'><li>Home</li></a>
              <a href="#about" onClick={closedSideBar} className='hover:underline hover:text-gray-400'><li>About</li></a>
              <a href="#projects" onClick={closedSideBar} className='transition-all duration-75 hover:underline hover:text-gray-300'><li>Projects</li></a>
              <a href="#skills" onClick={closedSideBar} className='hover:underline hover:text-gray-300'><li>Skills</li></a>
              <a href="#contact" onClick={closedSideBar} className='hover:underline hover:text-gray-300'><li>Contact</li></a>
            </ul>
          </nav>
        </div>
    </>
  )
}

export default Sidebar
