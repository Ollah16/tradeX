import React, { useEffect, useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon, GlobeAltIcon, QuestionMarkCircleIcon, UserIcon } from '@heroicons/react/outline'
import { useRef } from 'react'

const NavListUl = (props) => {

    const { helpLiRef, langRef, helpHover, langHover, language, handleInner, param } = props
    const ulRef = useRef(null)
    const [positionX, setPosition] = useState(1)

    // useEffect(() => {
    //     const handleMouseEnter = (event, li) => {
    //         const mouseX = event.clientX;
    //         const elementX = li.getBoundingClientRect().left;
    //         const position = mouseX < elementX ? 'left' : 'right';
    //         setPosition(position);
    //     };

    //     const liElements = document.querySelectorAll('.liElement');

    //     liElements.forEach((li, index) => {
    //         li.addEventListener('mouseenter', (event) => {
    //             handleMouseEnter(event, li);
    //         });
    //     });

    //     return () => {
    //         liElements.forEach((li) => {
    //             li.removeEventListener('mouseenter', handleMouseEnter);
    //         });
    //     };
    // }, []);




    return (
        <ul className='list-none p-0 m-0 md:flex-row flex md:items-center flex-col justify-between items-start' ref={ulRef}>
            <li className='text-blue-200 px-2 bg-white/5 w-full md:w-auto md:my-1 my-2 hover:bg-white/10 md:hover:bg-inherit md:bg-transparent transition-colors duration-500 ease-in-out'>
                <div className={`cursor-pointer flex md:justify-between items-center md:py-5 relative
                md:after:content-[''] md:after:absolute md:after:top-full md:after:h-1
                md:after:bg-white md:after:transition-width md:after:duration-500 after:ease-in-out after:transition-left
                md:hover:after:left-0 md:hover:after:w-full md:after:w-0 md:after:left-2/4 py-3`}>
                    <UserIcon className='h-4 text-blue-200 md:mx-1 mr-1' />
                    <span>Data Services Login</span>
                </div>
            </li>


            <li className='text-blue-200 px-2 bg-white/5 w-full md:w-auto md:my-1 my-2 hover:bg-white/10 md:hover:bg-inherit md:hover:bg-none md:bg-transparent transition-colors duration-500 ease-in-out'>
                <div className={`cursor-pointer flex md:justify-between items-center md:py-5 py-3 relative
                md:after:content-[''] md:after:absolute md:after:top-full md:after:h-1
                md:after:bg-white md:after:transition-width md:after:duration-500 md:after:ease-in-out md:after:transition-left
                ${helpHover ? 'md:after:left-0 md:after:w-full' : 'md:after:w-0 md:after:left-2/4'}`}
                    onClick={window.innerWidth < 768 ? () => handleInner(param) : null}
                    ref={helpLiRef}>
                    <QuestionMarkCircleIcon className='h-4 text-blue-200 md:mx-1 mr-1' />
                    <span>Help</span>
                    <span className='grow flex justify-end md:hidden'> <ChevronRightIcon className='text-blue-200 h-4' /></span>
                    <ChevronDownIcon className={`h-4 text-blue-200 mx-1 transition-transform ease-in-out duration-500 hidden md:inline-block ${helpHover ? 'rotate-x-180' : ''}`} />
                </div>
            </li >

            <li className='text-blue-200 px-2 md:inline-block hidden'>
                <div className={`cursor-pointer flex justify-between items-center py-5 relative
                after:content-[''] after:absolute after:top-full after:h-1
                after:bg-white after:transition-width after:duration-500 after:ease-in-out after:transition-left
                ${langHover ? 'after:left-0 after:w-full' : 'after:w-0 after:left-2/4'}
                    `}
                    ref={langRef}>
                    <GlobeAltIcon className='h-4 text-blue-200 mx-1' />
                    <span>{language}</span>
                    <ChevronDownIcon className={`h-4 text-blue-200 mx-1 transition-transform ease-in-out duration-500 hidden md:inline-block ${langHover ? 'rotate-x-180' : ''}`} />
                </div>
            </li>
        </ul >

    )
}

export default NavListUl
