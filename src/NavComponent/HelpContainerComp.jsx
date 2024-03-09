import { ExclamationIcon } from '@heroicons/react/outline'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import InnerCancelButtonComp from './InnerCancelButtonComp';

const HelpContainerComp = ({ helpHover, helpContent, innerCategory, handleInner, param }) => {

    return (
        <div className={`absolute w-full md:w-96 ${innerCategory === 'help' ? 'right-0' : 'right-[-500px]'}
         text-blue-200 md:text-black md:-96 h-max md:right-[132px] md:bg-white p-5 pt-0 md:fixed z-20 transition-top transition-right ease-in-out duration-500 
        ${helpHover ? 'md:top-[75px]' : 'md:top-[-100%]'}`} ref={helpContent}>

            <ul>
                <InnerCancelButtonComp handleInner={handleInner} param={param} />
                <li className={`relative flex flex-col justify-between py-3
                                        mr-[-1.25rem] ml-[-1.25rem] px-5 transition-colors duration-500 ease-in-out hover:bg-white/10
                    before:absolute before:w-0 before:h-px before:bottom-0 before:content-[''] before:inline before:bg-black hover:before:w-full before:transition-width before:duration-500 before:left-0 before:ease-in-out
                     after:left-0 after:bottom-0 after:absolute after:bg-gray-400/45
                    after:content-[''] after:h-px after:w-full after:inline-block after:my-0 text-base cursor-pointer`}><div><span><ExclamationIcon className='h-5 inline mr-2' /></span><span>Support</span></div></li>
                <li className={`relative flex flex-col justify-between py-3
                                        mr-[-1.25rem] ml-[-1.25rem] px-5 transition-colors duration-500 ease-in-out hover:bg-white/10
                    before:absolute before:w-0 before:h-px before:bottom-0 before:content-[''] before:inline before:bg-black hover:before:w-full before:transition-width before:duration-500 before:left-0 before:ease-in-out
                     after:left-0 after:bottom-0 after:absolute after:bg-gray-400/45
                    after:content-[''] after:h-px after:w-full after:inline-block after:my-0 text-base cursor-pointer`}><div><span><MdOutlineEmail className='h-5 inline mr-2 text-xl' /></span><span>Email</span></div></li>
            </ul>
        </div>
    )
}

export default HelpContainerComp
