import React, { useState } from 'react'

const LanguageListComp = ({ langContent, langHover, handleLang }) => {

    const [langList, setLang] = useState([
        { name: 'English', abbr: 'EN' },
        { name: 'Deutsche', abbr: 'DE' },
        { name: 'Español', abbr: 'ES' },
        { name: 'Português', abbr: 'PT' },
        { name: 'Français', abbr: 'FR' },
        { name: 'Italiano', abbr: 'IT' },
        { name: 'PУ', abbr: 'PY' },
        { name: '繁體中文', abbr: '繁體' },
        { name: '日本', abbr: 'JP' }
    ])

    return (
        <div className={` text-black w-96 h-max right-[48px] bg-white p-5 pt-0 fixed z-20 transition-top ease-in-out duration-500 ${langHover ? 'top-[75px]' : 'top-[-100%]'}`} ref={langContent}>
            <ul>
                {langList.map((lang, index) => (
                    <li onClick={() => handleLang(lang.abbr)}
                        className={`relative flex flex-col justify-between py-3
                    before:absolute before:w-0 before:h-px before:bottom-0 before:content-[''] before:inline before:bg-black hover:before:w-full before:transition-width before:duration-500 before:left-0 before:ease-in-out
                     after:left-0 after:bottom-0 after:absolute after:bg-gray-400/45
                    after:content-[''] after:h-px after:w-full after:inline-block after:my-0 text-base cursor-pointer`} key={index}>{lang.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageListComp
