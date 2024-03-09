import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ConvertComp from './ConvertComp'
import ConvertIntro from './ConvertIntro'
import TradexDataComp from './TradexDataComp'
import TradexInformation from './TradexInformation'
import DownloadLinkComp from './DownloadLinkComp'
import FrequentQuest from './FrequentQuest'

const MainComponent = ({ navDrop, handleDrop, menuHover, helpHover, langHover }) => {
    const [amount, setAmount] = useState(20)
    const [allCurrency, setAllCurr] = useState([])
    const [currencyOne, setCurrOne] = useState('Eth')
    const [currencyTwo, setCurrTwo] = useState('Btc')
    const [equivalent, setEquiv] = useState(30)
    const mainRef = useRef(null)
    const [isAdvanceRate, setRate] = useState(false)

    // useEffect(() => {
    //     handleFetchRate()
    // }, [])

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

        axios.get('https://developer.oanda.com/exchange-rates-api/', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer 08e02877-d52c-4465-bb73-ae673b74e023`
            }
        })
            .then((response) => {
                setAllCurr(response.data);
            })
            .catch((error) => {
                console.error('Error fetching exchange rates:', error);
            });
    };

    const handleConverSion = () => {
        let currMatch = allCurrency.find((curr, index) => curr.currency === currencyOne)
        setEquiv(20 * amount)
    }

    const handleSwitch = () => {
        setCurrOne(currencyTwo)
        setCurrTwo(currencyOne)
        setAmount(equivalent)
        setEquiv(amount)
    }

    return (
        <div ref={mainRef} className={`py-3 p-7 w-full transition-colors duration-300 ease-in-out relative z-5 ${navDrop || menuHover || helpHover || langHover ? 'bg-black/15' : ''}`}>

            <div className={`${navDrop ? 'pointer-events-none' : ''}`}>
                <div className={`md:max-w-[1100px] md:mx-auto`}>
                    < ConvertIntro
                        amount={amount}
                        currencyOne={currencyOne}
                        currencyTwo={currencyTwo}
                    />

                    <ConvertComp
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
