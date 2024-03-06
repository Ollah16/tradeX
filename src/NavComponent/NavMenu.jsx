import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const NavMenu = () => {
    return (
        <div className={`flex items-center h-full before:content-[''] before:bg-white before:h-6 before:w-px before:inline-block before:mx-4 mb-[-5px]`} >
            <button
                className='border-none bg-transparent text-blue-200 text-lg flex items-center justify-between w-16'
            >
                <span>Menu</span>
                <ChevronDownIcon className={`text-inherit h-4 transition-transform ease-in-out duration-300`} />
            </button>

        </div >
    )
}

export default NavMenu
