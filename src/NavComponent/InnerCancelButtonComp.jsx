import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import { useNavContext } from '../context/navContext'

const InnerCancelButtonComp = ({ param }) => {

    const { handleInner } = useNavContext()
    return (
        <li className='px-5  mr-[-1.25rem] ml-[-1.25rem] py-2 bg-gray-500/50 md:hidden'>
            <button className='flex gap-x-2 items-center cursor-pointer w-fit' onClick={() => handleInner(param)}> <ArrowLeftIcon className='h-5' /><span>Back</span></button>
        </li>
    )
}

export default InnerCancelButtonComp
