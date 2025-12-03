"use client";
import React, { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <nav className="navbar bg-black/30 backdrop-blur-sm z-40 flex flex-col top-0 w-full md:py-3 py-1.5 md:px-5 px-1.5 gap-2.5 fixed">

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
                    <div
                        className="cursor-pointer text-white text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <IoIosClose /> : <IoIosMenu />}
                    </div>

                    {/* DROPDOWN MENU (Animated) */}
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="dropdownMenu fixed top-16 left-0 w-full bg-black/30 backdrop-blur-sm text-white py-3 z-40"
                        >
                            <ul className="flex flex-col items-center gap-3.5 text-lg font-semibold">
                                <a href="#home" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">Home</a>
                                <a href="#about" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">About</a>
                                <a href="#projects" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">Projects</a>
                                <a href="#skills" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">Skills</a>
                                <a href="#contact" className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">Contact</a>
                                {/* <Link href={"/"} className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">Home</Link>
                                <Link href={"/projects"} className="hover:text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-base cursor-pointer">Projects</Link> */}
                                {/* <li className="hover:text-gray-300 cursor-pointer">Skills</li>
                        <li className="hover:text-gray-300 cursor-pointer">Contact</li> */}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
