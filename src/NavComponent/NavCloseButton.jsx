import React from 'react'
import { XIcon } from '@heroicons/react/outline'
import { useNavContext } from '../context/navContext'

const NavCloseButton = () => {

    const { handleDrop, navDrop } = useNavContext()
    return (
        <div className={`${navDrop ? 'left-[-20px]' : '-left-[900px]'} flex justify-center 
        transition-left ease-in-out duration-500 md:hidden 
        items-center mr-5 absolute top-0 h-full flex-col bg-gray-900 w-14`}>
            <XIcon onClick={() => handleDrop()} className='text-blue-200 h-7 w-7 cursor-pointer' />
        </div>
    )
}

export default NavCloseButton
