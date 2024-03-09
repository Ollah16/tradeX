import React from 'react'
import { XIcon } from '@heroicons/react/outline'

const NavCloseButton = ({ handleDrop, navDrop }) => {
    return (
        <div className={`${navDrop ? 'left-[-20px]' : '-left-[500px]'} flex justify-center 
        transition-left ease-in-out duration-500 md:hidden 
        items-center mr-5 absolute top-0 h-full flex-col bg-gray-900 w-14`}>
            <XIcon onClick={() => handleDrop(!navDrop)} className='text-blue-200 h-7 w-7 cursor-pointer' />
        </div>
    )
}

export default NavCloseButton
