import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProjectCard({ image, title, description, href }) {
    return (
        <Link href={href} target='_blank'>
            <div className='flex flex-col cursor-pointer text-white hover:text-gray-300 hover:bg-gray-600 transition-all duration-300 items-center px-2.5 py-2.5 m-2 h-[330px] w-[320px] gap-5 ease-in-out rounded-lg shadow-lg shadow-indigo-800 hover:shadow-xl hover:shadow-gray-900 bg-indigo-500'>
                <Image src={image} className='object-contain rounded-md' alt={title} width={300} height={300} />
                <h3 className='lg:text-2xl sm:text-xl text-lg font-normal'>{title}</h3>
                <p className='lg:text-xl h-full sm:text-lg max-h-24 w-full break-words overflow-y-auto text-base font-light'>{description}</p>
            </div>
        </Link>
    )
}

export default ProjectCard
