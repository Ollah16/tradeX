import { ExclamationIcon } from '@heroicons/react/outline'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const HelpContainerComp = ({ helpHover, helpContent }) => {

    return (
        <div className={`text-black w-96 h-max right-[132px] bg-white p-5 py-3 fixed z-20 transition-top ease-in-out duration-500 ${helpHover ? 'top-[75px]' : 'top-[-100%]'}`} ref={helpContent}>
            <ul>
                <li className={`after:content-[''] after:bg-gray-500/25 after:h-px after:w-full after:inline-block after:my-2 text-base cursor-pointer`}><span><ExclamationIcon className='h-5 inline mr-2' /></span><span>Support</span></li>
                <li className={`after:content-[''] after:bg-gray-500/25 after:h-px after:w-full after:inline-block after:my-2 text-base cursor-pointer`}><span><MdOutlineEmail className='h-5 inline mr-2 text-xl' /></span><span>Email</span></li>
            </ul>
        </div>
    )
}

export default HelpContainerComp
