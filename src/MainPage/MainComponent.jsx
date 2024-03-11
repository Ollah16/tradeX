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
    const [currencyOne, setCurrOne] = useState()
    const [currencyTwo, setCurrTwo] = useState()
    const [equivalent, setEquiv] = useState(30)
    const mainRef = useRef(null)
    const [isAdvanceRate, setRate] = useState(false)

    useEffect(() => {
        handleFetchRate()
    }, [])

    useEffect(() => {
        handleConverSion()
    }, [amount])

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
                setAllCurr(data.slice(0, 50))
            })
            .catch((error) => {
                console.error('Error fetching exchange rates:', error);
            });
    };

    const handleConverSion = () => {
        // let currMatch = allCurrency.find((curr, index) => curr.currency === currencyOne)
        setEquiv(20 * amount)
    }

    const handleSwitch = () => {
        setCurrOne(currencyTwo)
        setCurrTwo(currencyOne)
        setAmount(equivalent)
        setEquiv(amount)
    }

    return (
        <div ref={mainRef} className={`
        ${allCurrency.length ? 'opacity-100' : 'opacity-0'} transition-opacity
        py-3 p-7 w-full md:before:h-20 md:before:content-[''] md:before:inline-block transition-colors duration-500 ease-in-out relative z-5 ${navDrop || menuHover || helpHover || langHover ? 'bg-black/15' : ''}`}>

            <div className={`${navDrop ? 'pointer-events-none' : ''}`}>
                <div className={`md:max-w-[1100px] md:mx-auto`}>
                    < ConvertIntro
                        amount={amount}
                        currencyOne={currencyOne}
                        currencyTwo={currencyTwo}
                    />

                    <ConvertComp
                        allCurrency={allCurrency}
                        navDrop={navDrop}
                        amount={amount}
                        setAmount={setAmount}
                        currencyOne={currencyOne}
                        currencyTwo={currencyTwo}
                        setCurrOne={setCurrOne}
                        setCurrTwo={setCurrTwo}
                        equivalent={equivalent}
                        isAdvanceRate={isAdvanceRate}
                        setRate={setRate}
                        handleSwitch={handleSwitch}
                    />

                    <TradexDataComp
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
