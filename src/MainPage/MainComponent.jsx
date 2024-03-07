import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ConvertComp from './ConvertComp'
import ConvertIntro from './ConvertIntro'
import TradexDataComp from './TradexDataComp'
import TradexInformation from './TradexInformation'
import DownloadLinkComp from './DownloadLinkComp'
import FrequentQuest from './FrequentQuest'

const MainComponent = ({ navDrop, handleDrop }) => {
    const [amount, setAmount] = useState(20)
    const [currencyOne, setCurrOne] = useState('')
    const [currencyTwo, setCurrTwo] = useState('')
    const [equivalent, setEquiv] = useState(30)
    const mainRef = useRef(null)

    // useEffect(() => {
    //     handleFetchRate()
    // }, [])

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

        axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=9bb02106792c2333039f2342f89e5740', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching exchange rates:', error);
            });
    };

    return (
        <div ref={mainRef} className={`py-3 p-7 w-full before:h-20 before:content-[''] before:block transition-colors duration-300 ease-in-out relative z-5 ${navDrop ? 'bg-black/10' : ''}`}>

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
                        equivalent={equivalent} />

                    <TradexDataComp />
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
