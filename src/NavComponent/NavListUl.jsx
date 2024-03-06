import React from 'react'
import { ChevronDownIcon, GlobeAltIcon, QuestionMarkCircleIcon, UserIcon } from '@heroicons/react/outline'

const NavListUl = () => {
    return (
        <div>
            <ul className='list-none p-0 m-0 md:flex-row flex md:items-center flex-col justify-between items-start' >
                <li className='text-blue-200 px-2 my-4 hover:text-blue-400'>
                    <div className='cursor-pointer flex justify-between items-center'>
                        <UserIcon className='h-4 text-blue-200 mx-1 userIcon' />
                        <span>Data Services Login</span>
                    </div>
                </li>

                <li className='text-blue-200 px-2 my-4 hover:text-blue-400'>
                    <div className='cursor-pointer flex justify-between items-center'>
                        <QuestionMarkCircleIcon className='h-4 text-blue-200 mx-1' />
                        <span>Help</span>
                        <ChevronDownIcon className='h-4 text-blue-200 mx-1 transition-transform ease-in-out duration-300 hidden md:inline-block' />
                    </div>
                </li>

                <li className='text-blue-200 px-2 my-4 hover:text-blue-400'>
                    <div className='cursor-pointer flex justify-between items-center'>
                        <GlobeAltIcon className='h-4 text-blue-200 mx-1' />
                        <span>EN</span>
                        <ChevronDownIcon className='h-4 text-blue-200 mx-1 transition-transform ease-in-out duration-300 hidden md:inline-block' />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default NavListUl
