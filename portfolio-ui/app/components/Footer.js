"use Client"
import React from 'react';
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.8, ease:"easeOut"}} className="bg-black w-screen relative px-2 py-10 text-white flex items-center justify-center text-center">
      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <span className='"text-[11px] flex sm:text-[13px] text-center justify-center items-center lg:text-base font-mono font-medium"'>Chiplun, Maharashtra, India</span>
        <span className="text-[12px] flex sm:text-sm text-center justify-center items-center lg:text-base font-mono font-medium">
          All &copy; 2025 Safdar Chougle rights reserved.
        </span>
      </div>
    </motion.footer>
  );
}

export default Footer;



