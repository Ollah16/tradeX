import React, { useEffect, useMemo, useState } from 'react'
import { QuestionMarkCircleIcon, ChevronLeftIcon, ChevronRightIcon, CalendarIcon, PrinterIcon } from '@heroicons/react/outline'
import { LuArrowUpDown } from "react-icons/lu";
import { useAppContext } from '../context/appContext';

const InputsComponent = () => {
    const {
        amount,
        handleAmount,
        amountOne,
        currencyOne,
        currencyTwo,
        handleAmountOne,
        handleCurrOne,
        handleCurrTwo,
        navDrop,
        isAdvanceRate,
        setRate,
        handleSwitch,
        allCurrency,
        handlePercentage } = useAppContext()

    const interBank = [
        '+/-0%',
        '+/-1%',
        '+/-2% (Typical Atm Rate)',
        '+/-3% (Typical Credit card Rate)',
        '+/-4%',
        '+/-5% (Typical Kiosk Rate)'
    ]

    const [day, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('')
    let [fullDate, setFDate] = useState('')
    const { cDate, months } = useMemo(() => { return { cDate: new Date(), months: ['Jan', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] } }, []);

    useEffect(() => {

        const handleCalendar = () => {
            let date = cDate.getDate()
            let newMonth = cDate.getMonth() + 1
            let newYear = cDate.getFullYear()
            let newFullDate = `${date < 10 ? '0' + date : date}/${months[newMonth]?.toUpperCase()}/${newYear}`

            setDate(date)
            setMonth(newMonth)
            setYear(newYear)
            setFDate(newFullDate)
        }

        handleCalendar()

    }, [cDate, months])

    const handleDate = (event) => {
        let newDay = day;
        let newMonth = month;
        const newDate = new Date().getDate()

        switch (event) {
            case 'next':
                newDay = day >= new Date(year, month, 0).getDate() ? 1 : day + 1;
                newDay = newDay > newDate ? day : newDay
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

    const handleDateInp = (dateValue) => {
        const extDate = new Date(dateValue)
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
                        aria-label='currency one'
                        onInput={(event) => handleCurrOne(event.target.value)}
                        value={currencyOne}
                        className={`h-14 w-full border-gray-400 bg-inherit border-solid rounded border p-3 focus: outline-none hover:border-gray-700`}>

                        {allCurrency?.map((curr, index) => (
                            <option key={index}>{curr.symbol}</option>
                        ))}

                    </select>

                    <input
                        aria-label='currency one'
                        type='number'
                        value={amount}
                        onInput={(event) => handleAmount(Number(event.target.value))}
                        placeholder='hello'
                        className={`h-14 w-full text-2xl font-medium transition-colors ease-in-out duration-200 ${navDrop ? 'bg-inherit' : 'bg-gray-400/15'} p-3 focus:outline-none hover:bg-gray-400/30  rounded-t border-b-2 border-black/50 transition-colors duration-200`} />

                </div>

                <span onClick={() => handleSwitch()} className='sm:relative flex justify-center items-center absolute bottom-2 right-7 sm:bottom-0 sm:right-0 cursor-pointer'><span className='text-green-800 mr-[2px] text-xs sm:hidden'>Switch</span><LuArrowUpDown className='text-green-800 transform rotate-90 w-4 md:h-7 cursor-pointer sm:inline-block sm:absolute md:bottom-3 h-3 sm:bottom-5' /></span>


                <div className='flex flex-col gap-x-8 gap-y-3'>
                    <select
                        aria-label='currency two'
                        onInput={(event) => handleCurrTwo(event.target.value)}
                        value={currencyTwo}
                        className={`h-14 w-full border-gray-400 bg-inherit border-solid rounded border p-3 focus: outline-none hover:border-gray-700`}
                    >
                        {allCurrency?.map((curr, index) => (
                            <option key={index}>{curr.symbol}</option>
                        ))}
                    </select>

                    <input
                        type='number'
                        aria-label='currency two'
                        value={amountOne ? amountOne.toFixed(5) : ''}
                        onInput={(event) => handleAmountOne(Number(event.target.value))}
                        className={`h-14 w-full text-2xl font-medium transition-colors ease-in-out duration-200 ${navDrop ? 'bg-inherit' : 'bg-gray-400/15'} p-3 focus:outline-none hover:bg-gray-400/30 rounded-t border-b-2 border-black/50 transition-colors duration-200`} />

                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-y-5 gap-x-10 w-full justify-between items-center my-4 relative'>
                <div className='flex justify-between items-center md:w-6/12 relative w-full overflow-hidden gap-x-1'>
                    <span className='w-1/12 text-sm cursor-default'>Date</span>

                    <div className='h-11 border-gray-400 lg:gap-1 border-solid hover:border-gray-700 flex border justify-evenly items-center rounded sm:w-10/12 lg:w-9/12 overflow-hidden relative px-1'>
                        <button onClick={() => handleDate('prev')} aria-label='previous day btn' className='hover:bg-gray-300 transition-colors duration-200'><ChevronLeftIcon className='text-black h-5' /></button>


                        <label className='flex justify-between items-center gap-x-1 w-fit relative' htmlFor='dateInput'>
                            {fullDate}  <CalendarIcon className='h-4 inline-block cursor-pointer' />
                        </label>
                        <input
                            type='date'
                            onInput={event => handleDateInp(event.target.value)}
                            className={`absolute opacity-0 w-full h-0`}
                            id='dateInput' />

                        <button
                            onClick={() => handleDate('next')}
                            aria-label='next day label'
                            className={`hover:bg-gray-300 transition-colors duration-200`}>
                            <ChevronRightIcon className='text-black h-5' /></button>
                    </div>
                </div>

                <div className='flex justify-between items-center md:w-6/12 relative w-full'>
                    <label htmlFor='bankRate' className='text-sm'>Preview interbank rate</label>
                    <select
                        onInput={(event) => handlePercentage(event.target.value)}
                        className={`rounded h-11 w-4/12 bg-inherit text-sm focus:outline-none border border-gray-400 border-solid hover:border-gray-700 p-2 mx-1`} id='bankRate'>
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
                <span className='underline sm:text-lg text-sm cursor-pointer text-blue-500 opacity-80 hover:opacity-100' onClick={() => setRate(!isAdvanceRate)}>
                    {isAdvanceRate ?
                        'Hide Advanced Currency Data'
                        :
                        'Advanced Currency Data'}
                </span>
                <span className='cursor-pointer sm:text-lg text-sm underline text-blue-500 opacity-80 flex items-center gap-x-1 hover:opacity-100' onClick={() => window.print()}>
                    <i><PrinterIcon className='h-5 text-black/60' /></i>
                    <a href='/'>print</a>
                </span>
            </div>

            <div>
                <p className='text-xs text-gray-500 my-1'>TRADEX's currency calculator tools use TRADEX Rates™, the touchstone FX rates compiled from leading market data contributors.</p>
            </div>
        </div>
    </div >)
}

export default InputsComponent
