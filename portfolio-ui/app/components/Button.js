import React from 'react'

function Button({ icon, title, onClick, bgColor = "", size = "", textColor = "", hoverTextColor = "", hoverBgColor = "", hoverSize = "", textSize = "", hoverTextSize = "" }) {
    return (
        <button onClick={onClick} className={`inline-flex font-mono font-light justify-center cursor-pointer text-center items-center ${textSize} ${hoverTextSize} ${bgColor} ${size} ${textColor} gap-2 py-3 px-3 rounded-2xl ${hoverTextColor} transition-all duration-500 ease-linear ${hoverSize} ${hoverBgColor}`}>
            {icon}
            <h2>{title}</h2>
        </button>
    )
}

export default Button
