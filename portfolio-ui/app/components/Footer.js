"use Client"
import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { SiLinktree } from "react-icons/si";
import Link from 'next/link';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0, ease: "easeInOut" }} className="bg-black w-screen relative bottom overflow-hidden px-3 py-7 text-white flex items-center justify-center text-center">
      <div className="flex flex-col gap-2.5 justify-center items-center text-center">
        <div className='flex flex-row md:gap-6 gap-3 justify-center items-center'>
          <div className="facebook flex items-center cursor-pointer justify-center text-center size-8 hover:bg-gray-400 text-white rounded-full hover:text-gray-800">
            <Link href={"https://www.linkedin.com/in/safdar-chougle"} className='text-xl'><IoLogoLinkedin /></Link>
          </div>
          <div className="instagram flex items-center cursor-pointer justify-center text-center size-8 hover:bg-gray-400 text-white rounded-full hover:text-gray-800">
            <Link href={"https://github.com/chouglesafdar22"} className='text-xl'><IoLogoGithub /></Link>
          </div>
          <div className="twitter flex items-center cursor-pointer justify-center text-center size-8 hover:bg-gray-400 text-white rounded-full hover:text-gray-800">
            <Link href={"https://linktr.ee/safdarchougle22"} className='text-xl'><SiLinktree /></Link>
          </div>
        </div>
        <p className="text-[10px] flex sm:text-xs text-center justify-center items-center lg:text-sm font-light font-mono">Chiplun, Maharashtra, India</p>
        <span className="text-[10px] flex sm:text-xs text-center justify-center items-center lg:text-sm font-mono font-medium">
          &copy;{currentYear} rights reserved.
        </span>
      </div>
    </motion.footer>
  );
}

export default Footer;



