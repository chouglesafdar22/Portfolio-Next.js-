import React, { useState } from 'react'
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";

export function SkillsCardddd({ icon, isActive, onClick }) {
    return (
        <div onClick={onClick} className={`flex justify-center p-2.5 m-2.5 items-center text-center rounded-xl hover:bg-gray-600 hover:text-gray-300 cursor-pointer hover:drop-shadow-xl hover:drop-shadow-gray-800  ${isActive ? "lg:text-9xl lg:w-32 lg:h-32 sm:text-9xl sm:w-28 sm:h-28 drop-shadow-2xl drop-shadow-gray-900 text-8xl w-24 h-24 bg-gray-600 text-gray-300" : "lg:text-8xl lg:w-24 lg:h-24 sm:text-8xl sm:w-20 drop-shadow-xl drop-shadow-indigo-800 sm:h-20 text-7xl w-[70px] h-[70px] bg-indigo-500 text-white"} }`}>
            {icon}
        </div>
    )
}

export default function SkillsCard({ title, icon1, icon2, icon3, icon4, icon5 }) {
    const [icon, setIcon] = useState(false);

    return (
        <div
            onClick={() => setIcon(!icon)}
            className='flex flex-col cursor-pointer text-white hover:text-gray-300 hover:bg-gray-600 transition-all duration-300  px-2.5 py-2.5 m-2 md:w-[600px] w-[350px] gap-5 ease-in-out rounded-lg shadow-lg shadow-indigo-800 hover:shadow-xl hover:shadow-gray-900 bg-indigo-500'>
            <div className='flex justify-between items-center'>
                <h3 className='lg:text-3xl sm:text-2xl text-xl font-normal font-mono'>{title}</h3>
                <p className='lg:text-2xl sm:text-xl text-lg text-center font-normal font-mono'>{icon ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}</p>
            </div>
            <div className={`${icon ? "block" : "hidden"} lg:text-5xl sm:text-4xl text-3xl font-light font-mono flex flex-wrap md:gap-5 gap-3.5 justify-items-start`}>
                <p>{icon1}</p>
                <p>{icon2}</p>
                <p>{icon3}</p>
                <p>{icon4}</p>
                <p>{icon5}</p>
            </div>
        </div>
    )
}


