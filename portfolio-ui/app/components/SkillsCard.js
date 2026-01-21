import React, { useState } from 'react'
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";

export default function SkillsCard({ title, icon1, icon2, icon3, icon4, icon5 }) {
    const [icon, setIcon] = useState(false);

    return (
        <div
            onClick={() => setIcon(!icon)}
            className='flex flex-col cursor-pointer text-white hover:text-gray-300 hover:bg-gray-600 transition-all duration-300  px-2.5 py-2.5 m-2 md:w-[600px] w-[350px] gap-5 ease-in-out rounded-lg shadow-lg shadow-indigo-800 hover:shadow-xl hover:shadow-gray-900 bg-indigo-500'>
            <div className='flex justify-between items-center'>
                <h3 className='lg:text-3xl sm:text-2xl text-xl font-normal'>{title}</h3>
                <p className='lg:text-2xl sm:text-xl text-lg text-center font-normal'>{icon ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}</p>
            </div>
            <div className={`${icon ? "block" : "hidden"} lg:text-5xl sm:text-4xl text-3xl font-light flex flex-wrap md:gap-5 gap-3.5 justify-items-start`}>
                <p>{icon1}</p>
                <p>{icon2}</p>
                <p>{icon3}</p>
                <p>{icon4}</p>
                <p>{icon5}</p>
            </div>
        </div>
    )
};

export function SecondarySkillsCard({ title, icon1, icon2, icon3, icon4, icon5 }) {

    return (
        <div
            className='flex flex-col cursor-pointer text-white hover:text-gray-300 hover:bg-gray-600 transition-all duration-300  px-2.5 py-2.5 m-2 md:w-[600px] w-[350px] gap-5 ease-in-out rounded-lg shadow-lg shadow-indigo-800 hover:shadow-xl hover:shadow-gray-900 bg-indigo-500'>
            <div className='flex justify-start items-start'>
                <h3 className='lg:text-3xl sm:text-2xl text-xl font-normal'>{title}</h3>
            </div>
            <div className="lg:text-6xl sm:text-5xl text-4xl font-light flex flex-wrap md:gap-5 gap-3.5 justify-items-start">
                <p>{icon1}</p>
                <p>{icon2}</p>
                <p>{icon3}</p>
                <p>{icon4}</p>
                <p>{icon5}</p>
            </div>
        </div>
    )
};
