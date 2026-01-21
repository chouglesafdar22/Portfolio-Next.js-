"use Client"
import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { SiLinktree } from "react-icons/si";
import Link from 'next/link';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0, ease: "easeInOut" }} className="bg-black w-screen relative bottom overflow-hidden px-3 py-7 text-gray-300 flex items-center justify-center text-center">
      <div className="flex flex-col gap-2.5 justify-center items-center text-center">
        <p className="text-[10px] flex sm:text-xs text-center justify-center items-center lg:text-sm font-light">Chiplun, Maharashtra, India</p>
        <span className="text-[10px] flex sm:text-xs text-center justify-center items-center lg:text-sm font-normal">
          All &copy;{currentYear} rights reserved.
        </span>
      </div>
    </motion.footer>
  );
}

export default Footer;



