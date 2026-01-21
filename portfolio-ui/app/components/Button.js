import Link from 'next/link';
import React from 'react';

export function Button({ icon, title, href, bgColor = "", size = "", textColor = "", hoverTextColor = "", hoverBgColor = "", hoverSize = "", textSize = "" }) {
    return (
        <a href={href}>
            <button className={`flex flex-row font-light justify-center cursor-pointer text-center items-center ${textSize} ${bgColor} ${size} ${textColor} gap-2 py-3 px-3 rounded-2xl ${hoverTextColor} transition-all duration-1000 ease-in-out ${hoverSize} ${hoverBgColor}`}>
                {icon}
                <h2>{title}</h2>
            </button>
        </a>
    )
}

export function IconButton({ icon, href, bgColor = "", size = "", textColor = "", hoverTextColor = "", hoverBgColor = "", hoverSize = "", textSize = "" }) {
    return (
        <Link href={href} target='_blank'>
            <button className={`inline-flex font-light justify-center cursor-pointer text-center items-center ${textSize} ${bgColor} ${size} ${textColor} gap-2 py-3 px-3 rounded-2xl ${hoverTextColor} transition-all duration-1000 ease-in-out ${hoverSize} ${hoverBgColor}`}>
                {icon}
            </button>
        </Link>
    )
}
