import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto';


const ChartComponent = (props) => {
    const { amount, amountOne, currencyOne, currencyTwo } = props
    const chartRef = useRef(null)
    const [amountEquiv, setAmEQ] = useState()
    const [amountInp, setAmIN] = useState()

    const [tabList, setTabList] = useState([
        { name: 'Min' },
        { name: 'Avg' },
        { name: 'Max' }
    ]);




    let [months, setMonths] = useState(['Jan',
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ])

    useEffect(() => {
        chartRef.current.style.width = '100%'
        const chartDef = chartRef.current.getContext('2d');
        const currentDay = new Date()

        setAmEQ(typeof amountOne === 'number' ? parseFloat(amountOne.toFixed(2)) : null)
        setAmIN(typeof amount === 'number' ? parseFloat(amount.toFixed(2)) : null)

        const rateChart = new Chart(chartDef, {
            type: 'line',
            data: {
                labels: [
                    `${months[currentDay.getMonth() + 1]} ${currentDay.getDate()}`,
                    `${months[currentDay.getMonth() + 1]} ${currentDay.getDate()}`
                ],
                datasets: [
                    {
                        label: 'Price Line',
                        data: [
                            amount,
                            amountOne,
                        ]
                    }
                ]
            }
        });
        console.log(rateChart)

        return () => {
            rateChart.destroy();
        };
    }, [amount, amountOne]);

    return (
        <div className='border border-gray-300 rounded-lg p-7 w-full flex md:flex-col flex-row gap-x-5 gap-y-5 h-full'>

            <div className='w-6/12 md:w-full chartContainer h-1/2'>
                <canvas ref={chartRef} className='h-full w-full'></canvas>
            </div>


            <div className='w-6/12 md:w-full grow h-1/2'>

                <table className='table-auto w-full h-full'>

                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-xs font-normal text-gray-900/70 py-2'>Bid <span className='text-gray-800/50'>Sell {!isNaN(amountInp) && amountInp} {currencyOne}</span></th>
                            <th className='text-xs font-normal text-gray-900/70 py-2'>Ask <span className='text-gray-800/50'>Buy {!isNaN(amountInp) && amountInp} {currencyTwo}</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabList.map((tab, index) => (
                            <tr key={index} className='text-sm text-center text-gray-900/60 border-collapse border-gray-300 border border-x-0 leading-normal'>
                                <td className='py-1'>{tab.name}</td>
                                {!isNaN(amountEquiv) && <td className='py-1'>{amountEquiv}</td>}
                                {!isNaN(amountEquiv) && <td className='py-1'>{amountEquiv}</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div >
    )
}

export default ChartComponent
