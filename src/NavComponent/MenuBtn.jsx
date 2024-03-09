import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'
const MenuBtn = (props) => {

    const { handleDrop } = props

    return (
        <div className='md:hidden py-5 h-full'>
            <MenuIcon onClick={() => handleDrop()} className='text-blue-200 h-7 w-7 cursor-pointer' />
        </div>
    )
}

export default MenuBtn
