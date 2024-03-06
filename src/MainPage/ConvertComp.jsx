import { ChevronLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import React, { useState } from 'react'
import ChartComponent from './ChartComponent';
import InputsComponent from './InputsComponent';

const ConvertComp = (props) => {

    const { amount, equivalent, setAmount, currencyOne, currencyTwo, setCurrOne, setCurrTwo, navDrop } = props



    return (
        <div className="flex flex-col gap-y-10 md:flex-row my-5 md:gap-x-10 justify-between relative">
            <InputsComponent
                navDrop={navDrop}
                currencyOne={currencyOne}
                currencyTwo={currencyTwo}
                setCurrOne={setCurrOne}
                setCurrTwo={setCurrTwo}
                equivalent={equivalent}
                amount={amount}
                setAmount={setAmount}
            />

            <ChartComponent
                equivalent={equivalent}
                amount={amount}
                currencyOne={currencyOne}
                currencyTwo={currencyTwo}
            />

        </div >)
}

export default ConvertComp
