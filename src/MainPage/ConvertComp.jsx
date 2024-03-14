import { ChevronLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import React, { useState } from 'react'
import ChartComponent from './ChartComponent';
import InputsComponent from './InputsComponent';

const ConvertComp = (props) => {

    const { tabList, handlePercentage, allCurrency, amount, amountOne, handleAmountOne, handleAmount, currencyOne, currencyTwo, handleCurrOne, handleCurrTwo, navDrop, isAdvanceRate, setRate, handleSwitch } = props



    return (
        <div className="flex flex-col gap-y-10 my-5 md:gap-x-10 justify-between relative md:grid md:grid-cols-3">
            <InputsComponent
                handlePercentage={handlePercentage}
                navDrop={navDrop}
                handleAmountOne={handleAmountOne}
                amountOne={amountOne}
                allCurrency={allCurrency}
                currencyOne={currencyOne}
                currencyTwo={currencyTwo}
                handleCurrOne={handleCurrOne}
                handleCurrTwo={handleCurrTwo}
                amount={amount}
                handleAmount={handleAmount}
                isAdvanceRate={isAdvanceRate}
                setRate={setRate}
                handleSwitch={handleSwitch}
            />

            <ChartComponent
                tabList={tabList}
                amount={amount}
                amountOne={amountOne}
                currencyOne={currencyOne}
                currencyTwo={currencyTwo}
            />

        </div >)
}

export default ConvertComp
