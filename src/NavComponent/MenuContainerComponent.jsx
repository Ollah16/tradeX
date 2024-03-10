import React, { useEffect, useState } from 'react'
import NavMenuContent from './NavMenuContent'

const MenuContainerComponent = ({ menuRef, menuHover, menuList }) => {



    return (
        <div className={`bg-white text-black mx-10 md:fixed hidden z-20 transition-top ease-in-out duration-500 md:block ${menuHover ? 'md:top-[75px]' : 'md:top-[-100%]'}`} ref={menuRef}>
            <NavMenuContent menuList={menuList} />
        </div>
    )
}

export default MenuContainerComponent
