import React from 'react'
import NavBar from './NavComponent/navBar';
import MainComponent from './MainPage/MainComponent';
import Footer from './FooterComponent/Footer';
import FooterBottom from './FooterComponent/FooterBottom';
import MenuContainerComponent from './NavComponent/MenuContainerComponent';
import HelpContainerComp from './NavComponent/HelpContainerComp';
import LanguageListComp from './NavComponent/LanguageListComp';
import NavExpand from './NavComponent/NavExpand';

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-gray-50 overflow-hidden relative">
            <NavBar />
            <MenuContainerComponent />
            <NavExpand />
            <MainComponent />
            <HelpContainerComp />
            <LanguageListComp />
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default HomePage
