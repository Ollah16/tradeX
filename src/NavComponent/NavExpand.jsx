import React, { useEffect, useRef } from 'react'
import NavListUl from './NavListUl'
import NavMenuContent from './NavMenuContent'
import { ChevronRightIcon, GlobeAltIcon } from '@heroicons/react/outline'
import LanguageListComp from './LanguageListComp'
import HelpContainerComp from './HelpContainerComp'

const NavExpand = ({ navDrop, menuList, expandLang, handleInner, innerCategory, langList, handleLang }) => {

    return (
        <div className={`md:hidden bg-gray-900 z-10 top-[75px] bottom-0 overflow-x-hidden overflow-y-scroll
        absolute transition-left duration-500 ease-in-out w-7/12 ${navDrop ? 'left-0' : '-left-[500px]'}`}>
            <div className={`
           
            md:hidden bg-inherit w-full py-5 absolute transition-left duration-500 ease-in-out ${innerCategory ? '-left-[500px]' : 'left-0'}`}>
                <NavListUl handleInner={handleInner} />
                <NavMenuContent menuList={menuList} />

                <div onClick={() => handleInner('language')}
                    className='text-blue-200 cursor-pointer px-2 py-3 bg-white/5 w-full md:w-auto md:my-1 my-2 hover:bg-white/10 flex items-center  transition-colors duration-500 ease-in-out'>
                    <GlobeAltIcon className='h-4 text-blue-200 mr-1' />
                    <span>{expandLang}</span>
                    <span className='grow flex justify-end'> <ChevronRightIcon className='text-blue-200 h-4' /></span>
                </div>
            </div >

            <LanguageListComp
                handleLang={handleLang}
                handleInner={handleInner}
                param={'language'}
                langList={langList}
                navDrop={navDrop}
                innerCategory={innerCategory}
            />

            <HelpContainerComp
                handleInner={handleInner}
                param={'help'}
                innerCategory={innerCategory}
            />
        </div>
    )
}

export default NavExpand
