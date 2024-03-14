import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ConvertComp from './ConvertComp'
import ConvertIntro from './ConvertIntro'
import TradexDataComp from './TradexDataComp'
import TradexInformation from './TradexInformation'
import DownloadLinkComp from './DownloadLinkComp'
import FrequentQuest from './FrequentQuest'

const MainComponent = ({ navDrop, handleDrop, menuHover, helpHover, langHover }) => {
    const [amount, setAmount] = useState(1)
    const [allCurrency, setAllCurr] = useState([])
    const [currencyOne, setCurrOne] = useState('')
    const [currencyTwo, setCurrTwo] = useState('')
    const [amountOne, setAmountOne] = useState()
    const mainRef = useRef(null)
    const [isAdvanceRate, setRate] = useState(false)

    useEffect(() => {
        handleFetchRate()
    }, [])

    useEffect(() => {
        handleConversion()
    }, [allCurrency])


    useEffect(() => {
        const handleScreen = () => navDrop ?
            mainRef.current.addEventListener('click', handleDropFunc)
            :
            mainRef.current.removeEventListener('click', handleDropFunc);
        handleScreen()

        return () => {
            mainRef.current.removeEventListener('click', handleDropFunc);
        };

    }, [navDrop]);

    const handleDropFunc = () => {
        handleDrop(!navDrop)

    }

    const handleFetchRate = () => {

        axios.get('https://tradex-iota.vercel.app/fetchRate/liveRate ', {

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
            .then((response) => {
                const data = response.data
                setCurrOne(data[0].symbol)
                setCurrTwo(data[1].symbol)
                setAllCurr(data.slice(0, 100))
            })
            .catch((error) => {
                console.error('Error fetching exchange rates:', error);
            });

    };

    const handleConversion = () => {
        const currPriceOne = allCurrency && allCurrency.find(curr => curr.symbol === currencyOne)?.quote?.USD?.price
        const currPriceTwo = allCurrency && allCurrency.find(curr => curr.symbol === currencyTwo)?.quote?.USD?.price;
        setAmountOne(Number(amount * currPriceOne / currPriceTwo))
    }

    const handleCurrOne = (event) => {
        setCurrOne(event)
        const currPriceOne = allCurrency && allCurrency.find(curr => curr.symbol === event)?.quote?.USD?.price
        const currPriceTwo = allCurrency && allCurrency.find(curr => curr.symbol === currencyTwo)?.quote?.USD?.price;

        setAmountOne(amount * currPriceOne / currPriceTwo)
    }

    const handleCurrTwo = (event) => {
        setCurrTwo(event)
        const currPriceOne = allCurrency && allCurrency.find(curr => curr.symbol === currencyOne)?.quote?.USD?.price
        const currPriceTwo = allCurrency && allCurrency.find(curr => curr.symbol === event)?.quote?.USD?.price;
        setAmount(amountOne * currPriceTwo / currPriceOne)
    }

    const handleAmount = (event) => {
        const currPriceOne = allCurrency && allCurrency.find(curr => curr.symbol === currencyOne)?.quote?.USD?.price
        const currPriceTwo = allCurrency && allCurrency.find(curr => curr.symbol === currencyTwo)?.quote?.USD?.price;
        setAmount(event)
        setAmountOne(event * currPriceOne / currPriceTwo)
    }

    const handleAmountOne = (event) => {
        const currPriceOne = allCurrency && allCurrency.find(curr => curr.symbol === currencyOne)?.quote?.USD?.price
        const currPriceTwo = allCurrency && allCurrency.find(curr => curr.symbol === currencyTwo)?.quote?.USD?.price;
        setAmountOne(event)
        setAmount(event * currPriceTwo / currPriceOne)
    }

    const handleSwitch = () => {
        setCurrOne(currencyTwo)
        setCurrTwo(currencyOne)
        setAmount(amountOne)
        setAmountOne(amount)
    }

    const handlePercentage = (event) => {

        setAmountOne(amountOne * event)

    }

    return (
        <div ref={mainRef} className={`
        py-3 p-7 w-full md:before:h-20 md:before:content-[''] md:before:inline-block transition-colors duration-500 ease-in-out relative z-5 ${navDrop || menuHover || helpHover || langHover ? 'bg-black/15' : ''}`}>

            <div className={`${navDrop ? 'pointer-events-none' : ''}`}>
                <div className={`md:max-w-[1100px] md:mx-auto`}>

                    < ConvertIntro
                        amount={amount}
                        currencyOne={currencyOne}
                        currencyTwo={currencyTwo}
                    />

                    <ConvertComp
                        handlePercentage={handlePercentage}
                        allCurrency={allCurrency}
                        navDrop={navDrop}
                        amount={amount}
                        handleAmount={handleAmount}
                        currencyOne={currencyOne}
                        currencyTwo={currencyTwo}
                        handleCurrOne={handleCurrOne}
                        handleCurrTwo={handleCurrTwo}
                        handleAmountOne={handleAmountOne}
                        amountOne={amountOne}
                        isAdvanceRate={isAdvanceRate}
                        setRate={setRate}
                        handleSwitch={handleSwitch}
                    />

                    <TradexDataComp
                        allCurrency={allCurrency}
                        isAdvanceRate={isAdvanceRate}
                        currencyOne={currencyOne}
                        currencyTwo={currencyTwo}
                    />
                </div>
                <div className='bg-gray-500/5 mx-[-28px] mb-[-0.75rem]'>
                    <div className='max-w-[900px] mx-auto'>
                        <TradexInformation />

                        <DownloadLinkComp />

                        <FrequentQuest />
                    </div>

                </div>

            </div>
        </div >
    )
}

export default MainComponent
