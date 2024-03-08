import React, { useState } from 'react'

const LanguageListComp = ({ langContent, langHover }) => {

    const [langList, setLang] = useState([
        'English',
        'Deutsche',
        'Español',
        'Português',
        'Français',
        'Italiano',
        'PУ',
        '繁體中文',
        '日本'
    ])

    return (
        <div className={`text-black w-96 h-max right-14 bg-white p-5 py-3 fixed z-20 transition-top ease-in-out duration-500 ${langHover ? 'top-[75px]' : 'top-[-100%]'}`} ref={langContent}>
            <ul>
                {langList.map((lang, index) => (
                    <li className={`after:content-[''] after:bg-gray-500/25 after:h-px after:w-full after:inline-block after:my-2 text-base cursor-pointer`} key={index}>{lang}</li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageListComp
