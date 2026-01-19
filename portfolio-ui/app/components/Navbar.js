"use client";
import React, { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="navbar flex flex-col fixed top-0 w-full bg-black/30 backdrop-blur-sm z-40 md:py-5 py-3 md:px-5 px-3">
                <div className="flex flex-col">
                    <div className="justify-between flex flex-row items-center">
                        <div className="logo justify-center items-center text-center">
                            <h1 className="xl:text-3xl lg:text-2xl sm:text-xl text-lg text-white font-extrabold font-sans">
                                Safdar Chougle
                            </h1>
                        </div>
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex justify-center items-center cursor-pointer text-white text-4xl transition-all duration-700 ease-linear hover:text-gray-300">
                            {isOpen ? <IoIosClose /> : <IoIosMenu />}
                        </div>
                    </div>
                    <div className={`${isOpen ? "block" : "hidden"} items-center text-white transition-all duration-initial ease-in-out`}>
                        <ul className="flex flex-col justify-center items-center gap-3.5 py-3 px-2.5 text-lg font-semibold">
                            <a href="#home" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">HOME</a>
                            {/* <a href="#aboutme" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">ABOUT ME</a> */}
                            <a href="#skills" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">SKILLS</a>
                            <a href="#projects" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">PROJECTS</a>
                            <a href="#contact" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">LET WORK TOGETHER</a>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}