import React, { useState } from 'react'
import InnerCancelButtonComp from './InnerCancelButtonComp'

const LanguageListComp = ({ langContent, langHover, handleLang, langList, innerCategory, handleInner, param }) => {


    return (
        <div className={`absolute w-full md:w-96 ${innerCategory === 'language' ? 'right-0' : '-right-full'}
         text-blue-200 md:text-black md:-96 h-max md:right-[48px] md:bg-white p-5 pt-0 md:fixed z-20 transition-top transition-right ease-in-out duration-500 
        ${langHover ? 'md:top-[75px]' : 'md:top-[-100%]'}`}
            ref={langContent}>
            <ul>
                <InnerCancelButtonComp handleInner={handleInner} param={param} />

                {langList.map((lang, index) => (
                    <li onClick={() => handleLang(lang.abbr)}
                        className={`relative flex flex-col justify-between py-3
                        mr-[-1.25rem] ml-[-1.25rem] px-5 transition-colors duration-500 ease-in-out hover:bg-white/10
                    before:absolute before:w-0 before:h-px before:bottom-0 before:content-[''] before:inline before:bg-black hover:before:w-full before:transition-width before:duration-500 before:left-0 before:ease-in-out
                     after:left-0 after:bottom-0 after:absolute after:bg-gray-400/45
                    after:content-[''] after:h-px after:w-full after:inline-block after:my-0 text-base cursor-pointer`} key={index}>{lang.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageListComp
