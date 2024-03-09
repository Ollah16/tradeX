import { ExclamationIcon } from '@heroicons/react/outline'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const HelpContainerComp = ({ helpHover, helpContent }) => {

    return (
        <div className={`text-black w-96 h-max right-[132px] bg-white p-5 pt-0 fixed z-20 transition-top ease-in-out duration-500 ${helpHover ? 'top-[75px]' : 'top-[-100%]'}`} ref={helpContent}>
            <ul>
                <li className={`relative flex flex-col justify-between py-3
                    before:absolute before:w-0 before:h-px before:bottom-0 before:content-[''] before:inline before:bg-black hover:before:w-full before:transition-width before:duration-500 before:left-0 before:ease-in-out
                     after:left-0 after:bottom-0 after:absolute after:bg-gray-400/45
                    after:content-[''] after:h-px after:w-full after:inline-block after:my-0 text-base cursor-pointer`}><div><span><ExclamationIcon className='h-5 inline mr-2' /></span><span>Support</span></div></li>
                <li className={`relative flex flex-col justify-between py-3
                    before:absolute before:w-0 before:h-px before:bottom-0 before:content-[''] before:inline before:bg-black hover:before:w-full before:transition-width before:duration-500 before:left-0 before:ease-in-out
                     after:left-0 after:bottom-0 after:absolute after:bg-gray-400/45
                    after:content-[''] after:h-px after:w-full after:inline-block after:my-0 text-base cursor-pointer`}><div><span><MdOutlineEmail className='h-5 inline mr-2 text-xl' /></span><span>Email</span></div></li>
            </ul>
        </div>
    )
}

export default HelpContainerComp
