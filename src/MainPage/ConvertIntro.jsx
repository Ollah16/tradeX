import React from 'react'

const ConvertIntro = (props) => {

    const { amount, currencyOne, currencyTwo } = props

    return (
        <div className='w-full'>
            <p className='tracking-wide uppercase font-medium text-slate-700'>TradeX Converter</p>
            <div className='sm:flex-row sm:flex sm:justify-between sm:items-center gap-y-3 hidden'>
                <div className={`text-3xl font-bold ${currencyOne ? 'opacity-100' : 'opacity-0'}`}>{`${amount} ${currencyOne} to ${currencyTwo}`}</div>
                <div><button className={`border-none bg-blue-500 text-white text-lg py-2 px-3 rounded
     hover:bg-blue-900 hover:shadow-lg hover:shadow-gray-700 transition-all ease-in-out duration-200`}>Online Trading</button></div>
            </div>
        </div >)
}

export default ConvertIntro
