import React, { useEffect } from 'react'
import ConvertComp from './ConvertComp'
import ConvertIntro from './ConvertIntro'
import TradexDataComp from './TradexDataComp'
import TradexInformation from './TradexInformation'
import DownloadLinkComp from './DownloadLinkComp'
import FrequentQuest from './FrequentQuest'
import { useNavContext } from '../context/navContext'
import { useAppContext } from '../context/appContext'

const MainComponent = () => {

    const { navDrop, handleDrop, menuHover, helpHover, langHover } = useNavContext()
    const { mainRef } = useAppContext()

    useEffect(() => {
        const handleDropFunc = () => handleDrop(!navDrop);

        const mainCurr = mainRef.current;
        const handleScreen = () => navDrop ?
            mainCurr.addEventListener('click', handleDropFunc)
            :
            mainCurr.removeEventListener('click', handleDropFunc);

        const handleResize = () => {
            if (window.innerWidth > 768 && navDrop) {
                handleDrop(false);
            }
        };

        handleScreen();
        window.addEventListener('resize', handleResize);

        return () => {
            mainCurr.removeEventListener('click', handleDropFunc);
            window.removeEventListener('resize', handleResize);
        };
    }, [navDrop, mainRef, handleDrop]);

    return (
        <div ref={mainRef} className={`
        py-3 p-7 w-full md:before:h-20 md:before:content-[''] md:before:inline-block transition-colors duration-500 ease-in-out relative z-5 ${navDrop || menuHover || helpHover || langHover ? 'bg-black/15' : ''}`}>

            <div className={`${navDrop ? 'pointer-events-none' : ''}`}>
                <div className={`md:max-w-[1100px] md:mx-auto`}>

                    < ConvertIntro />

                    <ConvertComp />

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
