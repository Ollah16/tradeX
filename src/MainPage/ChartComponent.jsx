import React, { useState } from 'react'

const ChartComponent = (props) => {
    const { equivalent, amount, currency } = props

    const [tabList, setTabList] = useState([
        { name: 'Min', content: equivalent - 1 },
        { name: 'Avg', content: equivalent + 1 },
        { name: 'Max', content: equivalent + 2 }
    ]);


    return (
        <div className='border border-gray-300 rounded-lg p-7 md:max-w-[33.34%] w-full'>
            <table className='table-auto w-full'>
                <thead>
                    <tr>
                        <th></th>
                        <th className='text-sm font-normal text-gray-600'>Bid {amount} {currency}</th>
                        <th className='text-sm font-normal text-gray-600'>Sell {amount} {currency}</th>
                    </tr>
                </thead>
                <tbody>
                    {tabList.map((tab, index) => (
                        <tr key={index} className='text-sm text-center text-gray-900 border-collapse border-gray-300 border border-x-0'>
                            <td className='py-1'>{tab.name}</td>
                            <td>{tab.content}</td>
                            <td>{tab.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default ChartComponent
