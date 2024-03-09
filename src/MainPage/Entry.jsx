import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../NavComponent/navBar';
import MainComponent from './MainComponent';
import Footer from '../FooterComponent/Footer';
import FooterBottom from '../FooterComponent/FooterBottom';
import MenuContainerComponent from '../NavComponent/MenuContainerComponent';
import HelpContainerComp from '../NavComponent/HelpContainerComp';
import LanguageListComp from '../NavComponent/LanguageListComp';

const Entry = () => {
    const [navDrop, handleDrop] = useState(false)
    const menuRef = useRef(null)
    const menuBtnRef = useRef(null)
    const langRef = useRef(null)
    const langContent = useRef(null)
    const helpLiRef = useRef(null)
    const helpContent = useRef(null)
    const [menuHover, setHover] = useState(false)
    const [helpHover, setHelpHover] = useState(false)
    const [langHover, setLangHover] = useState(false)
    const [language, handleLang] = useState('EN')

    useEffect(() => {

        const menuButton = menuBtnRef.current;
        const menu = menuRef.current;
        const helpButton = helpLiRef.current;
        const helpContainer = helpContent.current
        const langButton = langRef.current
        const langContainer = langContent.current

        menuButton.addEventListener('mouseenter', handleMenuMouseEnter);
        menuButton.addEventListener('mouseleave', handleMenuMouseLeave);

        langButton.addEventListener('mouseenter', handleLangMouseEnter);
        langButton.addEventListener('mouseleave', handleLangMouseLeave);

        helpButton.addEventListener('mouseenter', handleHelpMouseEnter);
        helpButton.addEventListener('mouseleave', handleHelpMouseLeave);

        menu.addEventListener('mouseenter', handleMenuMouseEnter);
        menu.addEventListener('mouseleave', handleMenuMouseLeave);

        helpContainer.addEventListener('mouseenter', handleHelpMouseEnter);
        helpContainer.addEventListener('mouseleave', handleHelpMouseLeave);

        langContainer.addEventListener('mouseenter', handleLangMouseEnter);
        langContainer.addEventListener('mouseleave', handleLangMouseLeave);

        return () => {
            menuButton.removeEventListener('mouseenter', handleMenuMouseEnter);
            menuButton.removeEventListener('mouseleave', handleMenuMouseLeave);

            langButton.removeEventListener('mouseenter', handleLangMouseEnter);
            langButton.removeEventListener('mouseleave', handleLangMouseLeave);

            helpButton.removeEventListener('mouseenter', handleHelpMouseEnter);
            helpButton.removeEventListener('mouseleave', handleHelpMouseLeave);

            menu.removeEventListener('mouseleave', handleMenuMouseLeave);
            menu.removeEventListener('mouseenter', handleMenuMouseEnter);

            helpContainer.removeEventListener('mouseenter', handleHelpMouseEnter);
            helpContainer.removeEventListener('mouseleave', handleHelpMouseLeave);

            langContainer.removeEventListener('mouseenter', handleLangMouseEnter);
            langContainer.removeEventListener('mouseleave', handleLangMouseLeave);


        };
    }, []);


    const handleMenuMouseEnter = () => {
        setHover(true);
    };

    const handleMenuMouseLeave = () => {
        setHover(false);
    };

    const handleHelpMouseEnter = () => {
        setHelpHover(true);
    };

    const handleHelpMouseLeave = () => {
        setHelpHover(false);
    };

    const handleLangMouseEnter = () => {
        setLangHover(true);
    };

    const handleLangMouseLeave = () => {
        setLangHover(false);
    };



    return (
        <div className="min-h-[100vh] bg-gray-50 overflow-hidden">
            <NavBar navDrop={navDrop}
                handleDrop={handleDrop}
                menuBtnRef={menuBtnRef}
                langRef={langRef}
                helpLiRef={helpLiRef}
                menuHover={menuHover}
                helpHover={helpHover}
                langHover={langHover}
                language={language}
            />

            <MenuContainerComponent menuRef={menuRef} menuHover={menuHover} />

            <MainComponent navDrop={navDrop}
                handleDrop={handleDrop}
                menuHover={menuHover}
                helpHover={helpHover}
                langHover={langHover} />

            <HelpContainerComp helpHover={helpHover} helpContent={helpContent} />
            <LanguageListComp langContent={langContent} langHover={langHover} handleLang={handleLang} />
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default Entry
