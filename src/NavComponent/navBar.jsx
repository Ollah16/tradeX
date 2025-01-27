import React from 'react'
import MenuBtn from './MenuBtn'
import NavBrand from './NavBrand'
import NavMenu from './NavMenu'
import NavList from './NavList'
import NavCloseButton from './NavCloseButton'

const NavBar = () => {

    return (<div className='w-full bg-black/95 h-max md:fixed relative z-30'>
        <div className='mx-auto w-full flex justify-between md:px-10 px-5 items-center drop-shadow-2xl bg-transparent relative'>
            <div className='flex items-center relative'>
                <NavCloseButton />
                <MenuBtn />
                <NavBrand />
                <NavMenu />
            </div>
            <NavList listStyle={'md:block hidden'} />
        </div>

    </div >)
}

export default NavBar
