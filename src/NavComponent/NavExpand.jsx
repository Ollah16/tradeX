import React from 'react'
import NavListUl from './NavListUl'

const NavExpand = ({ navDrop }) => {


    return (
        <div className={`md:hidden bg-gray-900 z-10 top-auto
         fixed transition-left duration-500 ease-in-out h-full w-7/12 py-5 ${navDrop ? 'left-0' : '-left-[500px]'}`}>
            <NavListUl />
        </div>
    )
}

export default NavExpand
