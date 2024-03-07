import React, { useEffect, useState } from 'react'
import { QuestionMarkCircleIcon, ChevronLeftIcon, ChevronRightIcon, CalendarIcon, PrinterIcon } from '@heroicons/react/outline'
import { LuArrowUpDown } from "react-icons/lu";

const InputsComponent = (props) => {
    const { amount, setAmount, equivalent, currencyOne, currencyTwo, setCurrOne, setCurrTwo, navDrop, isAdvanceRate, setRate } = props


    const [interBank, setInter] = useState([
        '+/-0%',
        '+/-1%',
        '+/-2% (Typical Atm Rate)',
        '+/-3% (Typical Credit card Rate)',
        '+/-4%',
        '+/-5% (Typical Kiosk Rate)'
    ])

    const currentDate = new Date();
    let [day, setDate] = useState(currentDate.getDate());
    let [month, setMonth] = useState(currentDate.getMonth() + 1);
    let [year, setYear] = useState(currentDate.getFullYear())
    let [months, setMonths] = useState(['Jan',
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ])
    let [fullDate, setFDate] = useState(`${day < 10 ? '0' + day : day}/${months[month].toUpperCase()}/${year}`)



    const handleDate = (event) => {
        let newDay = day;
        let newMonth = month;
        let currDate = new Date().getDate()

        switch (event) {
            case 'next':
                newDay = day >= new Date(year, month, 0).getDate() ? 1 : day + 1;
                if (newDay === 1) {
                    newMonth = month === 12 ? 1 : month + 1;
                }

                break;
            case 'prev':
                newDay = day <= 1 ? new Date(year, month - 1, 0).getDate() : day - 1;
                if (day <= 1) {
                    newMonth = month === 1 ? 12 : month - 1;
                }
                break;
            default:
                break;
        }

        setDate(newDay);
        setMonth(newMonth);

        const formattedDate = `${newDay < 10 ? '0' + newDay : newDay}/${months[newMonth].toUpperCase()}/${year}`;

        setFDate(formattedDate);
    };

    const handleDateInp = (event) => {
        const extDate = new Date(event)
        let day = extDate.getDate() + 1
        let month = extDate.getMonth() + 1
        let currDate = new Date().getDate()
        if (day > currDate) return

        const formattedDate = `${day < 10 ? '0' + day : day}/${months[month].toUpperCase()}/${extDate.getFullYear()}`;

        setDate(day)
        setMonth(month)
        setFDate(formattedDate);

    }


    return (<div className='rounded-lg shadow-xl shadow-gray-300 col-span-2 p-7 w-full relative'>
        <div className='flex flex-col gap-y-3'>
            <div className='flex gap-x-5 sm:flex-row flex-col gap-y-5'>
                <div className='flex flex-col gap-x-8 gap-y-3'>
                    <select
                        onInput={(event) => setCurrOne(event.target.value)}
                        className={`h-14 w-full border-gray-400 bg-inherit border-solid rounded border p-3 focus: outline-none hover:border-gray-700`}>
                        <option>{currencyOne}</option>
                    </select>

                    <input
                        value={amount}
                        onInput={(event) => setAmount(event.target.value)}
                        className={`h-14 w-full text-2xl font-medium transition-colors ease -in -out duration-200 ${navDrop ? 'bg-inherit' : 'bg-slate-100'} p-3 focus: outline-none hover:border-gray-700 hover: bg-slate-200 rounded-t border-b-2 border-black transition-colors duration-200`} />

                </div>

                <span className='sm:relative flex justify-center items-center absolute bottom-2 right-7 sm:bottom-0 sm:right-0 cursor-pointer'><span className='text-green-800 mr-[2px] text-sm sm:hidden'>Switch</span><LuArrowUpDown className='text-green-800 transform rotate-90 w-4 md:h-7 cursor-pointer sm:inline-block sm:absolute md:bottom-3 h-4 sm:bottom-5' /></span>


                <div className='flex flex-col gap-x-8 gap-y-3'>
                    <select
                        onInput={(event) => setCurrTwo(event.target.value)}
                        className={`h-14 w-full border-gray-400 bg-inherit border-solid rounded border p-3 focus: outline-none hover:border-gray-700`}
                    >
                        <option>{currencyTwo}</option>
                    </select>

                    <input
                        value={equivalent}
                        onInput={(event) => setAmount(event.target.value)}
                        className={`h-14 w-full text-2xl font-medium transition-colors ease -in -out duration-200 ${navDrop ? 'bg-inherit' : 'bg-slate-100'} p-3 focus: outline-none hover:border-gray-700 hover: bg-slate-200 rounded-t border-b-2 border-black transition-colors duration-200`} />
                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-y-5 gap-x-10 w-full justify-between items-center my-4 relative'>
                <div className='flex justify-between items-center md:w-6/12 relative w-full overflow-hidden gap-x-1'>
                    <label className='w-1/12 text-sm' htmlFor='dateInp'>Date</label>

                    <div className='h-11 border-gray-400 border-solid hover:border-gray-700 flex border justify-evenly items-center rounded w-9/12 overflow-hidden relative'>
                        <button onClick={() => handleDate('prev')} className='hover:bg-gray-300 transition-colors duration-200'><ChevronLeftIcon className='text-black h-5' /></button>
                        <label className='flex justify-between items-center gap-x-3' htmlFor='dateInp'>
                            <span>{fullDate}</span> <CalendarIcon className='h-4 inline-block cursor-pointer' />
                        </label>
                        <input type='date'
                            onInput={event => handleDateInp(event.target.value)}
                            className={`opacity-0 absolute`}
                            id='dateInp' />

                        <button
                            onClick={() => handleDate('next')}
                            className={`hover:bg-gray-300 transition-colors duration-200`}>
                            <ChevronRightIcon className='text-black h-5' /></button>
                    </div>
                </div>

                <div className='flex justify-between items-center md:w-6/12 relative w-full'>
                    <label htmlFor='bankRate' className='text-sm'>Preview interbank rate</label>
                    <select type='date' className={`rounded h-11 w-4/12 bg-inherit text-sm focus:outline-none border border-gray-400 border-solid hover:border-gray-700 p-2 mx-1`} id='bankRate'>
                        {interBank.map((bank, index) => (
                            <option key={index}>{bank}</option>
                        ))}
                    </select>
                    <div className='questionMark flex-col'>
                        <QuestionMarkCircleIcon className='h-5 bg-gray-500 text-white cursor-pointer hover:bg-slate-700 rounded-full transition-colors duration-100 ease-in-out' />
                        <span className='learnmore cursor-pointer w-max px-2 rounded-sm text-sm align-middle absolute md:-bottom-6 -bottom-5 md:-right-16 -right-8  bg-gray-500/75 md:bg-gray-500 text-white tracking-tighter'>click here to learn more about currency converter</span>
                    </div>
                </div>
            </div>

            <div className='flex justify-between my-2'>
                <span className='underline text-lg sm:text-sm cursor-pointer text-blue-500 opacity-80 hover:opacity-100' onClick={() => setRate(!isAdvanceRate)}>
                    {isAdvanceRate ?
                        'Hide Advanced Currency Data'
                        :
                        'Advanced Currency Data'}
                </span>
                <span className='cursor-pointer text-lg sm:text-sm underline text-blue-500 opacity-80 flex items-center gap-x-1 hover:opacity-100' onClick={() => window.print()}>
                    <i><PrinterIcon className='h-5 text-black/60' /></i>
                    <a>print</a>
                </span>
            </div>

            <div>
                <p className='text-xs text-gray-500'>TRADEX's currency calculator tools use TRADEX Rates™, the touchstone FX rates compiled from leading market data contributors.</p>
            </div>
        </div>
    </div >)
}

export default InputsComponent
