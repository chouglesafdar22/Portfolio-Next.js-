"use client";
import React, { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <nav className="navbar bg-black/30 backdrop-blur-sm z-40 flex flex-col top-0 w-full md:py-5 py-2.5 md:px-5 px-2.5 gap-2.5 fixed">

                <div className="navbarLinks flex flex-row justify-between items-center text-center">

                    {/* Left Side Logo */}
                    <div className="leftSide flex items-center gap-3.5">
                        <Image
                            src={"/images/logo.png"}
                            alt="logo"
                            width={50}
                            height={50}

                            className="object-cover rounded-full"
                        />
                        <h1 className="xl:text-3xl lg:text-2xl sm:text-xl text-lg text-white font-extrabold font-sans">
                            Safdar Chougle
                        </h1>
                    </div>

                    {/* Menu Icon */}
                    <div className="flex justify-center items-center gap-2.5">
                        <div
                            className="cursor-pointer text-white text-3xl"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <IoIosClose /> : <IoIosMenu />}
                        </div>
                    </div>
                </div>

                {/* DROPDOWN MENU (Animated) */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="dropdownMenu fixed top-14 right-0 bg-black h-fit w-full items-center text-white py-3 px-3 z-40"
                    >
                        <ul className="flex flex-col items-center gap-3.5 px-2.5 text-lg font-semibold">
                            <a href="#home" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">HOME</a>
                            <a href="#aboutme" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">ABOUT ME</a>
                            <a href="#skills" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">SKILLS</a>
                            <a href="#projects" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">PROJECTS</a>
                            <a href="#contact" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">LET WORK TOGETHER</a>
                        </ul>
                    </motion.div>
                )}

            </nav>
        </>
    );
}

export default Navbar;
