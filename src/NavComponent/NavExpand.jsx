import React from 'react'
import NavListUl from './NavListUl'
import { XIcon } from '@heroicons/react/outline'

const NavExpand = ({ navDrop, handleDrop }) => {


    return (
        <div className={`md:hidden bg-gray-900/95 z-10 top-0
         fixed transition-right duration-500 ease-in-out h-full w-8/12 p-5 ${navDrop ? 'right-0' : '-right-[500px]'}`}>
            <div className='flex justify-end mr-5'>
                <XIcon onClick={() => handleDrop(!navDrop)} className='text-blue-200 h-7 w-7 cursor-pointer' />
            </div>

            <NavListUl />
        </div>
    )
}

export default NavExpand
