import React, { useEffect, useState } from 'react'
import MenuBtn from './MenuBtn'
import NavBrand from './NavBrand'
import NavMenu from './NavMenu'
import NavList from './NavList'
import NavExpand from './NavExpand'

const NavBar = (props) => {

    const { navDrop, handleDrop } = props

    useEffect(() => {
        const handleBody = () =>
            navDrop ? document.querySelector('body').style.overflow = 'hidden'
                : document.querySelector('body').style.overflow = 'auto'
        handleBody()
    }, [navDrop])

    return (<div className='w-full bg-black/95 h-max fixed z-20'>
        <div className='mx-auto w-full flex justify-between py-3 px-10 items-center drop-shadow-2xl bg-transparent'>
            <div className='flex items-center'>
                <NavBrand />
                <NavMenu />
            </div>
            <NavList />
            <MenuBtn
                handleDrop={handleDrop}
                navDrop={navDrop}
            />
        </div>
        <NavExpand
            navDrop={navDrop}
            handleDrop={handleDrop}

        />
    </div >)
}

export default NavBar
