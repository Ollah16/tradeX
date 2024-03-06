import React, { useState } from 'react'
import NavBar from '../NavComponent/navBar';
import MainComponent from './MainComponent';
import Footer from '../FooterComponent/Footer';
import FooterBottom from '../FooterComponent/FooterBottom';

const Entry = () => {
    const [navDrop, handleDrop] = useState(false)


    return (
        <div className="min-h-[100vh] bg-gray-50 overflow-hidden">
            <NavBar navDrop={navDrop} handleDrop={handleDrop} />
            <MainComponent navDrop={navDrop} handleDrop={handleDrop} />
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default Entry
