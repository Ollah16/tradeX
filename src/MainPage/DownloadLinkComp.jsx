import React from 'react'
import appleStore from '../asset/appleStore.webp'
import googlePlay from '../asset/googlePlay.webp'

const DownloadLinkComp = () => {
    return (
        <div className='p-7'>
            <div className='my-6 p-10 rounded-lg bg-gray-200/70 flex flex-col items-center'>
                <hr className='bg-green-800/70 h-1 w-40'></hr>
                <p className='my-1 uppercase text-gray-700 tracking-widest font-normal text-sm'>Convert on the go</p>
                <p className='my-2 text-xl font-bold text-gray-900/90 text-center'>Download the TRADEX Currency Converter app</p>
                <div className='flex justify-between gap-x-7 items-center'>
                    <span className='bg-black h-max flex p-1 px-2 rounded items-center cursor-pointer'>
                        <img src={appleStore} className='h-8' />
                    </span>
                    <span className='bg-black h-max flex p-1 px-2 rounded items-center cursor-pointer'>
                        <img src={googlePlay} className='h-8' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DownloadLinkComp
