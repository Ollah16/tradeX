import React, { useEffect, useState } from 'react'

const MenuContainerComponent = ({ menuRef, menuHover }) => {

    const [menuList, setMenuLi] = useState([
        {
            title: 'TRADING',
            heading: 'Trading',
            content: 'Globally recognized broker with experience in financial services dating forward to 2030'
        },

        {
            title: 'FOREIGN EXCHANGE DATA SERVICES',
            heading: 'Foreign Exchange Data Services',
            content: 'Accurate and reliable FX services and exchange rate data from a provider you can trust',
            headingTwo: 'Historical currency converter',
            contentTwo: 'Access data dating back to 1990 for over 38,000 FX pairs, with charting capabilities and each exporting options.',
            headingThree: 'Exchange rates API',
            contentThree: 'Our Exchange Rates API delivers data on 200 + currencies, commodities and precious metals.'
        }
    ])


    return (
        <div className={`bg-white text-black mx-10 fixed z-20 transition-top ease-in-out duration-500 hidden lg:block ${menuHover ? 'top-[75px]' : 'top-[-100%]'}`} ref={menuRef}>
            <div className={`p-5 py-7 text-lg after:w-full after:bg-gray-500/35 after:h-px after:content-[''] after:inline-block font-bold text-black/80 flex flex-col justify-center gap-y-2`}>
                PRODUCTS & SERVICES
            </div>

            <div className='px-5 sm:grid sm:grid-cols-3 hidden gap-x-20'>
                {menuList.map((menu, index) => (
                    <ul className={`flex flex-col ${index === 1 ? 'row-span-2' : 'row-span-1'}`} key={index}>
                        <li className='text-base font-medium after:bg-gray-500/35 my-2'>{menu.title}</li>
                        <li className={`text-2xl my-1 hover:text-blue-600 transition-color duration-100 cursor-pointer`}>
                            {menu.heading}</li>
                        <li className='text-xs my-1 '>{menu.content}</li>
                        {menu.headingTwo && <li className='text-2xl my-1 hover:text-blue-600 transition-color duration-100 cursor-pointer'>{menu.headingTwo}</li>}
                        {menu.contentTwo && <li className='text-xs my-1 '>{menu.contentTwo}</li>}
                        {menu.headingThree && <li className='text-2xl my-1 hover:text-blue-600 transition-color duration-100 cursor-pointer'>{menu.headingThree}</li>}
                        {menu.contentThree && <li className='text-xs my-1'>{menu.contentThree}</li>}
                    </ul>
                ))}

            </div>

            <div className='mt-4 bg-gray-400/20'>
                <div className='p-5 flex flex-col gap-y-2'>
                    <div className={`flex flex-col gap-y-2 after:w-full after:bg-gray-500/35 after:h-px after:content-[''] after:inline-block 
                uppercase text-base tracking-wide font-bold text-black/80`}>About Tradex</div>
                    <div className='text-lg text-black/90 hover:text-blue-600 transition-color duration-100 cursor-pointer w-max ease-in-out'>Group</div>
                    <div className='text-lg text-black/90 hover:text-blue-600 transition-color duration-100 cursor-pointer w-max ease-in-out'>Market pulse</div>
                </div>
            </div>

        </div>
    )
}

export default MenuContainerComponent
