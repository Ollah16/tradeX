import React, { useEffect } from 'react'
import NavListUl from './NavListUl'

const NavList = (props) => {
    const { helpLiRef, langRef, helpHover, langHover } = props

    return (
        <div className='md:block hidden'>
            <NavListUl
                helpLiRef={helpLiRef}
                langRef={langRef}
                helpHover={helpHover}
                langHover={langHover}
            />
        </div >
    )
}
export default NavList
