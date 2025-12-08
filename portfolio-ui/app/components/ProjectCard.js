import React from 'react'
import Image from 'next/image'

function ProjectCard({ image, title, description, onClick }) {
    return (
        <div onClick={onClick} className='flex flex-col cursor-pointer text-white hover:text-gray-300 hover:bg-gray-600 transition-all duration-300 px-2 py-1 m-2 w-72 h-80 sm:w-80 sm:h-96 gap-5 ease-in-out rounded-lg shadow-lg shadow-indigo-800 hover:shadow-xl hover:shadow-gray-900 bg-indigo-500'>
            <Image src={image} className='object-contain rounded-md sm:w-80 sm:h-48' alt={title} width={256} height={180} />
            <h3 className='lg:text-2xl sm:text-xl text-lg font-normal font-mono'>{title}</h3>
            <p className='lg:text-xl h-full sm:text-lg max-h-24 w-full break-words overflow-y-auto text-md font-light font-mono'>{description}</p>
        </div>
    )
}

export default ProjectCard
