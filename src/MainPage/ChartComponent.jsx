import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto';


const ChartComponent = (props) => {
    const { equivalent, amount, currency } = props
    const chartRef = useRef(null)

    const [tabList, setTabList] = useState([
        { name: 'Min', content: equivalent - 1 },
        { name: 'Avg', content: equivalent + 1 },
        { name: 'Max', content: equivalent + 2 }
    ]);

    let [months, setMonths] = useState(['Jan',
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ])


    useEffect(() => {
        const chartDef = chartRef.current.getContext('2d');
        const currentDay = new Date()

        const rateChart = new Chart(chartDef, {
            type: 'line',
            data: {
                labels: [
                    `${months[currentDay.getMonth() + 1]} ${currentDay.getDate() - 2}`,
                    `${months[currentDay.getMonth() + 1]} ${currentDay.getDate() - 1}`,
                    `${months[currentDay.getMonth() + 1]} ${currentDay.getDate()}`
                ],
                datasets: [
                    {
                        label: 'Rate Lines',
                        data: [
                            900,
                            300,
                            600
                        ]
                    }
                ]
            }
        });

        return () => {
            rateChart.destroy();
        };
    }, []);

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
                            <th className='text-sm font-normal text-gray-900/60'>Bid {amount} {currency}</th>
                            <th className='text-sm font-normal text-gray-900/60'>Sell {amount} {currency}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabList.map((tab, index) => (
                            <tr key={index} className='text-sm text-center text-gray-900/60 border-collapse border-gray-300 border border-x-0 leading-normal'>
                                <td>{tab.name}</td>
                                <td>{tab.content}</td>
                                <td>{tab.content}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div >
    )
}

export default ChartComponent
