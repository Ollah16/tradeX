import React, { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'
const AppStore = createContext();

export const AppProvider = ({ children }) => {
    const [amount, setAmount] = useState(1)
    const mainRef = useRef(null)
    const [allCurrency, setAllCurr] = useState([])
    const [currencyOne, setCurrOne] = useState('')
    const [currencyTwo, setCurrTwo] = useState('')
    const [amountOne, setAmountOne] = useState()
    const [isAdvanceRate, setRate] = useState(false)
    const [calcOne, setCalcOne] = useState()
    const [calcTwo, setCalcTwo] = useState()

    useEffect(() => {
        handleFetchRate()
    }, [])

    useEffect(() => {
        const handleConversion = () => {
            const currPriceOne = allCurrency && allCurrency.find(curr => curr.symbol === currencyOne)?.quote?.USD?.price
            const currPriceTwo = allCurrency && allCurrency.find(curr => curr.symbol === currencyTwo)?.quote?.USD?.price;
            setAmountOne(Number(amount * currPriceOne / currPriceTwo))
        }

        handleConversion()

    }, [allCurrency, amount, currencyOne, currencyTwo])

    useEffect(() => {
        const currPriceOne = allCurrency && allCurrency.find(curr => curr.symbol === currencyOne)
        const currPriceTwo = allCurrency && allCurrency.find(curr => curr.symbol === currencyTwo)
        setCalcOne(currPriceOne?.quote?.USD?.price / currPriceTwo?.quote?.USD?.price)
        setCalcTwo(currPriceTwo?.quote?.USD?.price / currPriceOne?.quote?.USD?.price)

    }, [currencyOne, currencyTwo, allCurrency])

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
        <AppStore.Provider value={{
            handlePercentage,
            handleSwitch,
            handleAmountOne,
            amountOne,
            handleCurrTwo,
            handleCurrOne,
            handleAmount,
            amount,
            allCurrency,
            currencyOne,
            currencyTwo,
            mainRef,
            isAdvanceRate,
            setRate,
            calcOne,
            calcTwo
        }}>
            {children}
        </AppStore.Provider>
    )
}

export const useAppContext = () => {
    return React.useContext(AppStore)
}