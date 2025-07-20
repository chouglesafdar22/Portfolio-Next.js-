"use Client"
import React from 'react';
import ScrollWrapper from './ScrollWrapper';

function Footer() {
  return (
    <div>
      <ScrollWrapper direction="down" ease="easeOut">
        <footer className="bg-black w-screen relative overflow-hidden px-2 py-10 text-white flex items-center justify-center text-center">
          <div className="flex flex-col gap-3 justify-center items-center text-center">
            <span className='"text-[10px] flex sm:text-[12px] text-center justify-center items-center lg:text-sm font-mono font-light"'>Chiplun, Maharashtra, India</span>
            <span className="text-[12px] flex sm:text-sm text-center justify-center items-center lg:text-base font-mono font-medium">
              &copy; 2025 Safdar Chougle rights reserved.
            </span>
          </div>
        </footer>
      </ScrollWrapper>
    </div>
  );
}

export default Footer;



