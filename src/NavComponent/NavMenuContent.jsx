import React from 'react'

const NavMenuContent = ({ menuList }) => {

    return (
        <div>
            <div className={`p-5 pb-3 md:py-7 md:text-lg text-sm after:w-full after:bg-gray-500/35 after:h-px after:content-[''] after:inline-block font-bold md:text-black/80 text-blue-200 flex flex-col justify-center gap-y-2`}>
                PRODUCTS & SERVICES
            </div>

            <div className='px-5 md:grid md:grid-cols-3 gap-x-20'>
                {menuList.map((menu, index) => (
                    <ul className={`flex flex-col text-blue-200  md:text-inherit ${index === 1 ? 'col-span-2 w-80' : 'col-span-1 '}`} key={index}>
                        <li className='md:text-base text-xs font-medium after:bg-gray-500/35 my-2'>{menu.title}</li>
                        <li className={`md:text-2xl py-2 px-5 mr-[-1.25rem] ml-[-1.25rem] text-sm my-1 hover:bg-white/10 md:hover:text-blue-600 transition-color duration-100 cursor-pointer`}>
                            {menu.heading}</li>
                        <li className='text-xs my-1 md:inline-block hidden'>{menu.content}</li>
                        {menu.headingTwo && <li className='md:text-2xl py-2 px-5 mr-[-1.25rem] ml-[-1.25rem] text-sm my-1 hover:bg-white/10 md:hover:text-blue-600 transition-color duration-100 cursor-pointer'>{menu.headingTwo}</li>}
                        {menu.contentTwo && <li className='text-xs my-1 md:inline-block hidden'>{menu.contentTwo}</li>}
                        {menu.headingThree && <li className='md:text-2xl py-2 px-5 mr-[-1.25rem] ml-[-1.25rem] text-sm my-1 hover:bg-white/10 md:hover:text-blue-600 transition-color duration-100 cursor-pointer'>{menu.headingThree}</li>}
                        {menu.contentThree && <li className='text-xs my-1 hidden'>{menu.contentThree}</li>}
                    </ul>
                ))}

            </div>

            <div className='mt-0 md:bg-gray-400/20 bg-inherit'>
                <div className='p-5 py-2 md:py-5 flex flex-col gap-y-2'>
                    <div className={`flex flex-col gap-y-2 after:w-full after:bg-gray-500/35 after:h-px after:content-[''] after:inline-block 
                uppercase tracking-wide font-bold text-blue-200 md:text-black/80 md:text-base text-xs`}>About Tradex</div>
                    <div className='md:text-lg text-sm py-2 md:py-0 text-blue-200 md:text-black/90 hover:bg-white/10 md:hover:text-blue-600 transition-color duration-100 cursor-pointer md:w-max ease-in-out px-5 mr-[-1.25rem] ml-[-1.25rem]'>Group</div>
                    <div className='md:text-lg text-sm py-2 md:py0 text-blue-200 md:text-black/90 hover:bg-white/10 md:hover:text-blue-600 transition-color duration-100 cursor-pointer md:w-max ease-in-out px-5 mr-[-1.25rem] ml-[-1.25rem]'>Market pulse</div>
                </div>
            </div>
        </div>
    )
}

export default NavMenuContent
