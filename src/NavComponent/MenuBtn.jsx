import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import { useNavContext } from '../context/navContext'

const MenuBtn = () => {

    const { handleDrop } = useNavContext()

    return (
        <div className='md:hidden py-5 h-full'>
            <MenuIcon onClick={() => handleDrop()} className='text-blue-200 h-7 w-7 cursor-pointer' />
        </div>
    )
}

export default MenuBtn
