import React from 'react'
import { ChevronDownIcon, GlobeAltIcon, QuestionMarkCircleIcon, UserIcon } from '@heroicons/react/outline'

const NavListUl = (props) => {

    const { helpLiRef, langRef, helpHover, langHover } = props

    return (
        <div>
            <ul className='list-none p-0 m-0 md:flex-row flex md:items-center flex-col justify-between items-start' >
                <li className='text-blue-200 px-2 '>
                    <div className={`cursor-pointer flex justify-between items-center py-5 relative
                after:content-[''] after:absolute  after:bottom-0  after:h-1
                after:bg-white after:transition-width after:duration-500 after:ease-in-out after:transition-left
                hover:after:left-0 hover:after:w-full after:w-0 after:left-2/4`}>
                        <UserIcon className='h-4 text-blue-200 mx-1 userIcon' />
                        <span>Data Services Login</span>
                    </div>
                </li>


                <li className='text-blue-200 px-2'>
                    <div className={`cursor-pointer flex justify-between items-center py-5 relative
                after:content-[''] after:absolute  after:bottom-0  after:h-1
                after:bg-white after:transition-width after:duration-500 after:ease-in-out after:transition-left
                ${helpHover ? 'after:left-0 after:w-full' : 'after:w-0 after:left-2/4'}`}
                        ref={helpLiRef}>
                        <QuestionMarkCircleIcon className='h-4 text-blue-200 mx-1' />
                        <span>Help</span>
                        <ChevronDownIcon className={`h-4 text-blue-200 mx-1 transition-transform ease-in-out duration-300 hidden md:inline-block ${helpHover ? 'rotate-x-180' : ''}`} />
                    </div>
                </li >

                <li className='text-blue-200 px-2'>
                    <div className={`cursor-pointer flex justify-between items-center py-5 relative
                after:content-[''] after:absolute  after:bottom-0  after:h-1
                after:bg-white after:transition-width after:duration-500 after:ease-in-out after:transition-left
                ${langHover ? 'after:left-0 after:w-full' : 'after:w-0 after:left-2/4'}`}
                        ref={langRef}>
                        <GlobeAltIcon className='h-4 text-blue-200 mx-1' />
                        <span>EN</span>
                        <ChevronDownIcon className={`h-4 text-blue-200 mx-1 transition-transform ease-in-out duration-300 hidden md:inline-block ${langHover ? 'rotate-x-180' : ''}`} />
                    </div>
                </li>
            </ul >
        </div >
    )
}

export default NavListUl
