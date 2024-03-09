import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const NavMenu = ({ menuBtnRef, menuHover }) => {
    return (
        <div className={`lg:flex relative py-0 hidden items-center h-full before:content-[''] before:bg-white before:h-6 before:w-px before:inline-block before:mx-4 mb-[-5px]`} >
            <button
                ref={menuBtnRef}
                className={`
                relative ${menuHover ? 'after:left-0 after:w-full' : 'after:w-0 after:left-2/4'}
                after:content-[''] after:absolute  after:bottom-0  after:h-1
                after:bg-white after:transition-width after:duration-500 after:ease-in-out after:transition-left
                border-none bg-transparent py-5 text-blue-200 text-lg flex items-center justify-between w-16`}
            >
                <span>Menu</span>
                <ChevronDownIcon className={`text-inherit h-4 ${menuHover ? 'rotate-x-180' : ''} transition-transform ease-in-out duration-300`} />
            </button>
        </div >
    )
}

export default NavMenu
