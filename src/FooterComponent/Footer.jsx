import React, { useState } from 'react'
import appleStore from '../asset/appleStore.webp'
import googlePlay from '../asset/googlePlay.webp'
import { PlusIcon } from '@heroicons/react/outline'
import { footerData } from '../utils'

const Footer = () => {
    const [category, setCat] = useState([])

    const handleFooter = (toggleType) => {
        setCat(prevCat =>
            prevCat.includes(toggleType)
                ? prevCat.filter(cat => cat !== toggleType)
                : [...prevCat, toggleType]
        );
    }

    return (
        <footer className="px-10 py-5 bg-black/95">
            <div className="flex flex-col gap-y-3">
                <div className="text-3xl pl-9 font-semibold text-blue-200 cursor-pointer uppercase">
                    TradeX
                </div>
                <div className="after:content-[''] after:h-px after:w-full after:bg-blue-200/25"></div>
            </div>

            <nav className="flex flex-col sm:grid sm:grid-cols-3 md:flex md:flex-row justify-between gap-x-12 py-2">
                {Object.entries(footerData)?.map(([liParent, liChild], index) => {
                    const isActive = category.includes(liParent);

                    return (
                        <ul
                            key={liParent}
                            className={`sm:w-fit my-1 ${index === 4 ? `sm:before:content-[''] sm:before:h-full sm:before:w-px sm:before:inline-block sm:before:bg-white/35 sm:flex gap-x-5 sm:col-span-2 sm:relative sm:justify-self-center` : ''}`}
                        >
                            <li>
                                <button
                                    className="text-white/35 cursor-pointer flex justify-between items-center sm:block leading-normal w-full"
                                    onClick={() => handleFooter(liParent)}
                                >
                                    {liParent}
                                    <PlusIcon className={`h-5 sm:hidden transition-transform duration-500 ease-in-out ${isActive ? 'rotate-[135deg]' : 'rotate-0'}`} />
                                </button>
                                <ul className={`${isActive ? 'max-h-52' : 'max-h-0'} overflow-hidden transition-[max-height] duration-500 ease-in-out`}>
                                    {liChild.map((child, childIndex) => (
                                        <li
                                            key={childIndex}
                                            className={`text-white/70 cursor-pointer hover:underline overflow-hidden md:my-2 sm:h-auto text-sm`}
                                        >
                                            {child}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    );
                })}
            </nav>

            <div className="flex justify-center sm:w-max gap-x-5 my-3 w-full">
                <img src={appleStore} className="h-10" alt="Download on the Apple Store" />
                <img src={googlePlay} className="h-10" alt="Get it on Google Play" />
            </div>
        </footer>
    );
}

export default Footer
