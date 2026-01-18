import React from 'react'

export function Button({ icon, title, onClick, bgColor = "", size = "", textColor = "", hoverTextColor = "", hoverBgColor = "", hoverSize = "", textSize = "" }) {
    return (
        <button onClick={onClick} className={`inline-flex font-mono font-light justify-center cursor-pointer text-center items-center ${textSize} ${bgColor} ${size} ${textColor} gap-2 py-3 px-3 rounded-2xl ${hoverTextColor} transition-all duration-1000 ease-in-out ${hoverSize} ${hoverBgColor}`}>
            {icon}
            <h2>{title}</h2>
        </button>
    )
}

export function IconButton({ icon, title, onClick, bgColor = "", size = "", textColor = "", hoverTextColor = "", hoverBgColor = "", hoverSize = "", textSize = "" }) {
    return (
        <button onClick={onClick} className={`inline-flex font-mono font-light justify-center cursor-pointer text-center items-center ${textSize} ${bgColor} ${size} ${textColor} gap-2 py-3 px-3 rounded-2xl ${hoverTextColor} transition-all duration-1000 ease-in-out ${hoverSize} ${hoverBgColor}`}>
            {icon}
            <h2>{title}</h2>
        </button>
    )
}
