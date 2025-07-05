import React from 'react'
import { useState } from 'react'

function SkillsCard({ icon, isActive, onClick }) {
    return (
        <div onClick={onClick} className={`flex justify-center p-2.5 m-2.5 items-center text-center rounded-xl hover:bg-gray-600 hover:text-gray-300 cursor-pointer hover:drop-shadow-xl hover:drop-shadow-gray-800  ${isActive ? "lg:text-9xl lg:w-28 lg:h-28 sm:text-9xl sm:w-24 sm:h-24 drop-shadow-2xl drop-shadow-gray-900 text-8xl w-20 h-20 bg-gray-600 text-gray-300" : "lg:text-8xl lg:w-24 lg:h-24 sm:text-8xl sm:w-20 drop-shadow-xl drop-shadow-indigo-800 sm:h-20 text-7xl w-16 h-16 bg-indigo-500 text-white"} }`}>
            {icon}
        </div>
    )
}

export default SkillsCard
