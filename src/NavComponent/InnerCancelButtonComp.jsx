import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/outline'

const InnerCancelButtonComp = ({ handleInner, param }) => {
    return (
        <li className='px-5  mr-[-1.25rem] ml-[-1.25rem] py-2 bg-gray-500/50 md:hidden'>
            <a className='flex gap-x-2 items-center cursor-pointer w-fit' onClick={() => handleInner(param)}> <ArrowLeftIcon className='h-5' /><span>Back</span></a>
        </li>
    )
}

export default InnerCancelButtonComp
