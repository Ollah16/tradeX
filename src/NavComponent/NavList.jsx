import React, { useEffect } from 'react'
import NavListUl from './NavListUl'

const NavList = (props) => {
    const { helpLiRef, langRef, helpHover, langHover, language } = props

    return (
        <div className='md:block hidden'>
            <NavListUl
                helpLiRef={helpLiRef}
                langRef={langRef}
                helpHover={helpHover}
                langHover={langHover}
                language={language}
            />
        </div >
    )
}
export default NavList
