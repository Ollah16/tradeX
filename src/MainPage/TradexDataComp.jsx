import React from 'react'
import { Link } from 'react-router-dom'

const TradexDataComp = (props) => {

    const { isAdvanceRate, currencyOne, currencyTwo } = props

    return (
        <div className={`gap-y-3 gap-x-10 my-10 w-full flex ${isAdvanceRate ? 'md:grid md:grid-cols-3 flex-col' : 'flex-col md:flex-row'}`}>

            <div className={`${isAdvanceRate ? 'block row-span-3 col-span-2' : 'hidden'} grid grid-rows-2 gap-x-5 gap-y-8`}>

                <div className='rounded-lg border border-gray-300 h-max col-span-2 md:col-span-1'>
                    <section className={`after:content-[''] after:w-full after:inline-block after:h-px after:bg-gray-500/45`}>
                        <div className='p-7 pb-0'>
                            <div className='text-xl font-bold'>{`Convert ${currencyOne} to ${currencyTwo} `}</div>
                            <div className='flex justify-around mt-3 text-base font-extrabold'><span>{currencyOne}</span> <span>{currencyTwo}</span></div>
                        </div>
                    </section>
                </div>

                <div className='rounded-lg border border-gray-300 h-max col-span-2 md:col-span-1'>
                    <section className={`after:content-[''] after:w-full after:inline-block after:h-px after:bg-gray-500/45`}>
                        <div className='p-7 pb-0'>
                            <div className='text-xl font-bold'>{`Convert ${currencyTwo} to ${currencyOne} `}</div>
                            <div className='flex justify-around mt-3 text-base font-extrabold'><span>{currencyTwo}</span> <span>{currencyOne}</span></div>
                        </div>
                    </section>
                </div>


                <div className='col-span-2 flex justify-between gap-x-5 h-max'>
                    <span className='rounded-lg bg-gray-200/45 w-full p-7 h-20 text-center text-lg uppercase font-bold'>{currencyOne}</span>
                    <span className='rounded-lg bg-gray-200/45 w-full p-7 h-20 text-center text-lg uppercase font-bold'>{currencyTwo}</span>
                </div>

            </div>

            <div className={`rounded-lg border border-gray-300 p-7 w-full`}>
                <div className='text-xl font-medium mb-1'>FX data API</div>

                <div className='text-base text-gray-600 my-3'>Our API can be integrated into your ERP, giving you access to accurate, historical FX data and rates.</div>

                <Link className='text-blue-500 underline opacity-80 hover:opacity-100'>More about our API</Link>
            </div>

            <div className={`rounded-lg border border-gray-300 p-7 w-full`}>

                <div className='text-xl font-medium mb-1'>Historical FX rates</div>

                <div className='text-base text-gray-600 my-3'>Download our data into a CSV file or access it via our cloud-based converter.</div>

                <Link className='text-blue-500 underline opacity-80 hover:opacity-100'>See our converter</Link>
            </div>

        </div >
    )
}

export default TradexDataComp
