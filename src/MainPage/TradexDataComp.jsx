import React from 'react'
import { Link } from 'react-router-dom'

const TradexDataComp = () => {
    return (
        <div className={`flex md:flex-row flex-col gap-y-3 gap-x-5 my-10`}>
            <div className='rounded-lg border border-gray-300 p-7 md:w-6/12 w-full'>
                <div className='text-xl font-medium mb-1'>FX data API</div>

                <div className='text-base text-gray-600 my-3'>Our API can be integrated into your ERP, giving you access to accurate, historical FX data and rates.</div>

                <Link className='text-blue-500 underline hover:text-blue-500/70'>More about our API</Link>
            </div>

            <div className='rounded-lg border border-gray-300 p-7 md:w-6/12 w-full'>

                <div className='text-xl font-medium mb-1'>Historical FX rates</div>

                <div className='text-base text-gray-600 my-3'>Download our data into a CSV file or access it via our cloud-based converter.</div>

                <Link className='text-blue-500 underline hover:text-blue-500/70'>See our converter</Link>
            </div>

        </div >
    )
}

export default TradexDataComp
