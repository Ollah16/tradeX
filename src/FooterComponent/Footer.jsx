import React, { useState } from 'react'
import appleStore from '../asset/appleStore.webp'
import googlePlay from '../asset/googlePlay.webp'

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

    return (
        <div className='px-10 py-5 bg-black/95'>
            <div className={`after:content-[''] after:h-[.08px] after:w-full after:bg-blue-200/25 flex flex-col gap-y-3`}>
                <div className={`text-3xl pl-9 font-semibold text-blue-200 cursor-pointer 
 uppercase`}>TradeX</div>
            </div>

            <div className='flex justify-between gap-x-12'>
                {Object.entries(footerList).slice(0, 4).map(([liParent, liChild]) =>
                (
                    <ul key={liParent} className='w-4/12 my-5'>
                        <li className='text-white/35 cursor-pointer my-4'>{liParent}</li>
                        {liChild.map((child, index) => (
                            <li className='text-white/70 cursor-pointer hover:underline my-2' key={index}>{child}</li>
                        ))}
                    </ul>
                )
                )}

                {Object.entries(footerList).slice(4, 5).map(([liParent, liChild]) =>
                (
                    <ul key={liParent}
                        className={`before:content-[''] before:h-full before:w-[.08px] before:inline-block before:bg-white/35 flex gap-x-5 w-4/12 my-5`}>
                        <span>
                            <li className='text-white/35 cursor-pointer my-4'>{liParent}</li>
                            {liChild.map((child, index) => (
                                <li className='text-white/70 cursor-pointer hover:underline my-2' key={index}>{child}</li>
                            ))}
                        </span>
                    </ul>
                )
                )}
            </div>

            <div className='flex justify-between w-max gap-x-5 my-3'>
                <img src={appleStore} className='h-10' />
                <img src={googlePlay} className='h-10' />
            </div>
        </div >
    )
}

export default Footer
