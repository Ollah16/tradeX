import React, { useState } from 'react'
import appleStore from '../asset/appleStore.webp'
import googlePlay from '../asset/googlePlay.webp'
import { PlusIcon } from '@heroicons/react/outline'

const Footer = () => {


    const [footerList, setFooterList] = useState({
        'EXCHANGE RATES API': [
            'Exchange rates API',
            'Free trial',
            'Pricing',
            'Developers',
            'Accuracy',
            'Integration matrix'],

        'CURRENCY CONVERTERS': [
            'Historical currency converter'],

        'FX PAYMENTS': [
            'Corporate',
            'Individual'],

        'RESOURCES': [
            'API resources',
            'Blog',
            'Frequently asked questions'],

        'TRADEX GROUP': [
            'About us',
            'Press',
            'News & analysis',
            'Careers']
    })

    const [category, setCat] = useState([])

    const handleFooter = (toggleType) => {
        let newCat = [...category]

        let filterArr = newCat.find(a => a === toggleType)

        if (filterArr) {
            newCat = newCat.filter((a) => a != filterArr)
            setCat(newCat)
        }
        else {
            setCat([...category, toggleType])
        }
    }

    return (
        <div className='px-10 py-5 bg-black/95'>
            <div className={`after:content-[''] after:h-[.08px] after:w-full after:bg-blue-200/25 flex flex-col gap-y-3`}>
                <div className={`text-3xl pl-9 font-semibold text-blue-200 cursor-pointer 
 uppercase`}>TradeX</div>
            </div>

            <div className='flex flex-col sm:grid sm:grid-cols-3 md:flex md:flex-row justify-between gap-x-12 py-2'>
                {Object.entries(footerList).map(([liParent, liChild], index) => {

                    let findActive = Array.isArray(category) ? category.find(a => a === liParent) : null

                    return <ul key={liParent}
                        className={`sm:w-fit sm:my-5 md:my-2 
                        ${index === 4 ? `sm:before:content-[''] sm:before:h-full sm:before:w-px 
                        sm:before:inline-block sm:before:bg-white/35 sm:flex gap-x-5 sm:col-span-2 sm:relative sm:justify-self-center` : ''}`}>

                        <span>
                            <li
                                className='text-white/35 cursor-pointer my-3 sm:mb-4 sm:mt-0 flex justify-between items-center sm:block leading-normal'
                                onClick={() => handleFooter(liParent)}
                            >{liParent} <PlusIcon className={`h-5 sm:hidden transition-rotate duration-500 ease-in-out ${findActive ? '-rotate-[135deg]' : '-rotate-180'}`} /></li>

                            {liChild.map((child, childIndex) => (
                                <li className={`text-white/70 cursor-pointer hover:underline overflow-hidden
                                 md:my-2 transition-height duration-500 ease-in-out sm:h-auto ${findActive ? 'h-10 my-2' : 'h-0'}`} key={childIndex}>{child}</li>
                            ))}
                        </span>
                    </ul>
                })}
            </div>


            <div className='flex justify-center sm:w-max gap-x-5 my-3 w-full'>
                <img src={appleStore} className='h-10' />
                <img src={googlePlay} className='h-10' />
            </div>
        </div >
    )
}

export default Footer
