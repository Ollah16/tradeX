import React from 'react'
import ChartComponent from './ChartComponent';
import InputsComponent from './InputsComponent';

const ConvertComp = () => {
    return (
        <div className="flex flex-col gap-y-10 my-5 md:gap-x-10 justify-between relative md:grid md:grid-cols-3">
            <InputsComponent />

            <ChartComponent />

        </div >)
}

export default ConvertComp
