import React, { useEffect } from 'react'
import MenuBtn from './MenuBtn'
import NavBrand from './NavBrand'
import NavMenu from './NavMenu'
import NavList from './NavList'
import NavCloseButton from './NavCloseButton'

const NavBar = (props) => {

    const { navDrop, handleDrop, menuBtnRef, helpLiRef, langRef, menuHover, helpHover, langHover, language } = props


    useEffect(() => {
        const handleBody = () =>
            navDrop ? document.querySelector('body').style.overflow = 'hidden'
                : document.querySelector('body').style.overflow = 'auto'
        handleBody()
    }, [navDrop])

    return (<div className='w-full bg-black/95 h-max md:fixed relative z-30'>
        <div className='mx-auto w-full flex justify-between md:px-10 px-5 items-center drop-shadow-2xl bg-transparent relative'>
            <div className='flex items-center relative'>
                <NavCloseButton
                    navDrop={navDrop}
                    handleDrop={handleDrop}
                />
                <MenuBtn
                    handleDrop={handleDrop}
                />
                <NavBrand />
                <NavMenu menuBtnRef={menuBtnRef} menuHover={menuHover} />
            </div>

            <NavList
                helpLiRef={helpLiRef}
                langRef={langRef}
                helpHover={helpHover}
                langHover={langHover}
                language={language}
            />

        </div>



    </div >)
}

export default NavBar
