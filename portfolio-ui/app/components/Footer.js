"use Client"
import React from 'react';
import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.footer initial={{ opaity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0, ease: "easeInOut" }} className="bg-black w-screen relative overflow-hidden px-2 py-5 text-white flex items-center justify-center text-center">
      <div className="flex flex-col gap-2.5 justify-center items-center text-center">
        <p className="text-[12px] flex sm:text-sm text-center justify-center items-center lg:text-base font-light font-mono">Chiplun, Maharashtra, India</p>
        <span className="text-sm flex sm:text-base text-center justify-center items-center lg:text-lg font-mono font-medium">
          &copy; 2025 Safdar Chougle rights reserved.
        </span>
      </div>
    </motion.footer>
  );
}

export default Footer;



