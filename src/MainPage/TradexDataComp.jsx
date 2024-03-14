import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/outline'

const TradexDataComp = (props) => {

    const { isAdvanceRate, currencyOne, currencyTwo, allCurrency } = props
    const [freqNum, setFreq] = useState([
        1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000, 50000
    ])

    const [calcOne, setCalcOne] = useState()
    const [calcTwo, setCalcTwo] = useState()

    useEffect(() => {
        const currPriceOne = allCurrency && allCurrency.find(curr => curr.symbol === currencyOne)
        const currPriceTwo = allCurrency && allCurrency.find(curr => curr.symbol === currencyTwo)
        setCalcOne(currPriceOne?.quote?.USD?.price / currPriceTwo?.quote?.USD?.price)
        setCalcTwo(currPriceTwo?.quote?.USD?.price / currPriceOne?.quote?.USD?.price)

    }, [currencyOne, currencyTwo])

    return (
        <div className={`gap-y-3 gap-x-10 my-10 w-full flex  ${isAdvanceRate ? 'md:grid md:grid-cols-3 flex-col' : 'flex-col md:flex-row'}`}>

            <div className={`${isAdvanceRate ? 'block row-span-3 col-span-2' : 'hidden'} grid grid-cols-2 gap-x-5 gap-y-8`}>

                <div className='rounded-lg border border-gray-300 md:col-span-1 col-span-2'>
                    <section className={``}>

                        <table className='table-auto w-full text-center'>
                            <caption className="caption-top py-4 text-2xl font-bold text-black/80">
                                {`Convert ${currencyOne} to ${currencyTwo} `}
                            </caption>

                            <thead className='border-b'>
                                <tr>
                                    <th className="caption-top py-1 text-xl font-bold text-black/90">{currencyOne}</th>
                                    <th className="caption-top py-1 text-xl font-bold text-black/90">{currencyTwo}</th>
                                </tr>
                            </thead>

                            <tbody className='p-1'>
                                {freqNum && freqNum.map((num, index) => (
                                    <tr key={index}>
                                        <td className='py-2 flex items-center justify-center underline text-blue-800/80 hover:text-blue-800 transition-colors duration-200 ease-in-out cursor-pointer'>{num} {currencyOne} <ChevronRightIcon className='h-4 inline' /> </td>
                                        <td className='py-2'>{num * calcOne} {currencyTwo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </div>

                <div className='rounded-lg border border-gray-300 md:col-span-1 col-span-2'>
                    <section className={``}>

                        <table className='table-auto w-full text-center'>
                            <caption className="caption-top py-4 text-2xl font-bold text-black/80">
                                {`Convert ${currencyTwo} to ${currencyOne} `}
                            </caption>

                            <thead className='border-b'>
                                <tr>
                                    <th className="caption-top py-1 text-xl font-bold text-black/90">{currencyTwo}</th>
                                    <th className="caption-top py-1 text-xl font-bold text-black/90">{currencyOne}</th>
                                </tr>
                            </thead>

                            <tbody>
                                {freqNum && freqNum.map((num, index) => (
                                    <tr key={index}>
                                        <td className='py-2 flex items-center justify-center underline text-blue-800/80 hover:text-blue-800 transition-colors duration-200 ease-in-out cursor-pointer'>{num} {currencyTwo} <ChevronRightIcon className='h-4 inline' /> </td>
                                        <td className='py-2'>{num * calcTwo} {currencyOne}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </div>


                <div className='col-span-2 flex gap-x-5 h-auto'>
                    <span className='rounded-lg bg-gray-200/45 w-full p-7 h-20 text-center text-lg uppercase font-bold'>
                        {currencyOne}
                    </span>
                    <span className='rounded-lg bg-gray-200/45 w-full p-7 h-20 text-center text-lg uppercase font-bold'>{currencyTwo}</span>
                </div>

            </div>

            <div className={`flex gap-4 ${isAdvanceRate ? 'row-span-3 flex-col' : 'flex-col md:flex-row'}`}>

                <div className={`rounded-lg border border-gray-300 p-7 w-full ${isAdvanceRate ? 'h-1/2' : 'h-48'}`}>
                    <div className='text-xl font-medium mb-1'>Crypto data API</div>

                    <div className='text-base text-gray-600 my-3'>Our API can be integrated into your ERP, giving you access to accurate, historical Crypto data and rates.</div>

                    <Link className='text-blue-500 underline opacity-80 hover:opacity-100'>More about our API</Link>
                </div>

                <div className={`rounded-lg border border-gray-300 p-7 w-full ${isAdvanceRate ? 'h-1/2' : 'h-48'}`}>

                    <div className='text-xl font-medium mb-1'>Historical Crypto rates</div>

                    <div className='text-base text-gray-600 my-3'>Download our data into a CSV file or access it via our cloud-based converter.</div>

                    <Link className='text-blue-500 underline opacity-80 hover:opacity-100'>See our converter</Link>
                </div>
            </div >
        </div >
    )
}

export default TradexDataComp
