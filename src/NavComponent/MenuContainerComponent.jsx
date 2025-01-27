import React from 'react'
import NavMenuContent from './NavMenuContent'
import { useNavContext } from '../context/navContext'

const MenuContainerComponent = () => {

    const { menuHover, menuRef } = useNavContext()

    return (
        <div className={`bg-white text-black mx-10 md:fixed hidden z-20 transition-top ease-in-out duration-500 md:block ${menuHover ? 'md:top-[75px]' : 'md:top-[-100%]'}`} ref={menuRef}>
            <NavMenuContent />
        </div>
    )
}

export default MenuContainerComponent
