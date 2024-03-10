import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../NavComponent/navBar';
import MainComponent from './MainComponent';
import Footer from '../FooterComponent/Footer';
import FooterBottom from '../FooterComponent/FooterBottom';
import MenuContainerComponent from '../NavComponent/MenuContainerComponent';
import HelpContainerComp from '../NavComponent/HelpContainerComp';
import LanguageListComp from '../NavComponent/LanguageListComp';
import NavExpand from '../NavComponent/NavExpand';

const Entry = () => {
    const [navDrop, setDrop] = useState(false)
    const menuRef = useRef(null)
    const menuBtnRef = useRef(null)
    const langRef = useRef(null)
    const langContent = useRef(null)
    const helpLiRef = useRef(null)
    const helpContent = useRef(null)
    const [menuHover, setHover] = useState(false)
    const [helpHover, setHelpHover] = useState(false)
    const [langHover, setLangHover] = useState(false)
    const [expandLang, setELang] = useState()

    const [menuList, setMenuLi] = useState([
        {
            title: 'TRADING',
            heading: 'Trading',
            content: 'Globally recognized broker with experience in financial services dating forward to 2030'
        },

        {
            title: 'FOREIGN EXCHANGE DATA SERVICES',
            heading: 'Foreign Exchange Data Services',
            content: 'Accurate and reliable FX services and exchange rate data from a provider you can trust',
            headingTwo: 'Historical currency converter',
            contentTwo: 'Access data dating back to 1990 for over 38,000 FX pairs, with charting capabilities and each exporting options.',
            headingThree: 'Exchange rates API',
            contentThree: 'Our Exchange Rates API delivers data on 200 + currencies, commodities and precious metals.'
        }
    ])

    const [langList, setLang] = useState([
        { name: 'English', abbr: 'EN' },
        { name: 'Deutsche', abbr: 'DE' },
        { name: 'Español', abbr: 'ES' },
        { name: 'Português', abbr: 'PT' },
        { name: 'Français', abbr: 'FR' },
        { name: 'Italiano', abbr: 'IT' },
        { name: 'PУ', abbr: 'PY' },
        { name: '繁體中文', abbr: '繁體' },
        { name: '日本', abbr: 'JP' }
    ])
    const [language, handleLang] = useState(langList[0].abbr)

    const [innerCategory, setInner] = useState()

    useEffect(() => {
        const findLang = langList.find(a => a.abbr === language)
        setELang(findLang.name)

    }, [language])

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

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])


    const handleResize = () => {
        if (window.innerWidth > 768 && navDrop) {
            handleDrop(false)
        }

    }

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

    const handleInner = (toggleType) => {
        setInner(prev => prev === toggleType ? null : toggleType)
    }

    const handleDrop = () => {

        setDrop(!navDrop)
        setInner('')
    }



    return (
        <div className="min-h-[100vh] bg-gray-50 overflow-hidden relative">
            <NavBar navDrop={navDrop}
                handleDrop={handleDrop}
                menuBtnRef={menuBtnRef}
                langRef={langRef}
                helpLiRef={helpLiRef}
                menuHover={menuHover}
                helpHover={helpHover}
                langHover={langHover}
                language={language}
                menuList={menuList}
            />

            <MenuContainerComponent menuRef={menuRef} menuHover={menuHover} menuList={menuList} />

            <NavExpand
                menuList={menuList}
                navDrop={navDrop}
                handleDrop={handleDrop}
                langList={langList}
                expandLang={expandLang}
                handleInner={handleInner}
                innerCategory={innerCategory}
                handleLang={handleLang}
            />

            <MainComponent navDrop={navDrop}
                handleDrop={handleDrop}
                menuHover={menuHover}
                helpHover={helpHover}
                langHover={langHover} />

            <HelpContainerComp helpHover={helpHover} helpContent={helpContent} />
            <LanguageListComp
                langContent={langContent}
                langHover={langHover}
                handleLang={handleLang}
                langList={langList}
                innerCategory={innerCategory} />
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default Entry
