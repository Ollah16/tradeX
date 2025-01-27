import React, { useEffect, useRef, useState } from "react";
import { langData } from "../utils";


const NavStore = React.createContext();

export const NavProvider = ({ children }) => {
    const menuRef = useRef(null)
    const menuBtnRef = useRef(null)
    const langRef = useRef(null)
    const langContent = useRef(null)
    const helpRef = useRef(null)
    const helpContent = useRef(null)

    const [menuHover, setHover] = useState(false)
    const [helpHover, setHelpHover] = useState(false)
    const [langHover, setLangHover] = useState(false)
    const [expandLang, setELang] = useState()
    const [pageLang, handleLang] = useState(langData[0].abbr)
    const [innerCategory, setInner] = useState()
    const [navDrop, setDrop] = useState(false)


    useEffect(() => {
        const { name } = langData.find(a => a.abbr === pageLang)
        setELang(name)
    }, [pageLang])

    useEffect(() => {

        const menuButton = menuBtnRef.current;
        const menu = menuRef.current;
        const helpButton = helpRef.current;
        const helpContainer = helpContent.current
        const langButton = langRef.current
        const langContainer = langContent.current


        if (menuButton) {
            menuButton.addEventListener('mouseenter', handleMenuMouseEnter);
            menuButton.addEventListener('mouseleave', handleMenuMouseLeave);
        }

        if (langButton) {
            langButton.addEventListener('mouseenter', handleLangMouseEnter);
            langButton.addEventListener('mouseleave', handleLangMouseLeave);
        }

        if (helpButton) {
            helpButton.addEventListener('mouseenter', handleHelpMouseEnter);
            helpButton.addEventListener('mouseleave', handleHelpMouseLeave);
        }

        if (menu) {
            menu.addEventListener('mouseenter', handleMenuMouseEnter);
            menu.addEventListener('mouseleave', handleMenuMouseLeave);
        }

        if (helpContainer) {
            helpContainer.addEventListener('mouseenter', handleHelpMouseEnter);
            helpContainer.addEventListener('mouseleave', handleHelpMouseLeave);
        }

        if (langContainer) {
            langContainer.addEventListener('mouseenter', handleLangMouseEnter);
            langContainer.addEventListener('mouseleave', handleLangMouseLeave);
        }

        return () => {
            if (menuButton) {
                menuButton.removeEventListener('mouseenter', handleMenuMouseEnter);
                menuButton.removeEventListener('mouseleave', handleMenuMouseLeave);
            }

            if (langButton) {
                langButton.removeEventListener('mouseenter', handleLangMouseEnter);
                langButton.removeEventListener('mouseleave', handleLangMouseLeave);
            }

            if (helpButton) {
                helpButton.removeEventListener('mouseenter', handleHelpMouseEnter);
                helpButton.removeEventListener('mouseleave', handleHelpMouseLeave);
            }

            if (menu) {
                menu.removeEventListener('mouseleave', handleMenuMouseLeave);
                menu.removeEventListener('mouseenter', handleMenuMouseEnter);
            }

            if (helpContainer) {
                helpContainer.removeEventListener('mouseenter', handleHelpMouseEnter);
                helpContainer.removeEventListener('mouseleave', handleHelpMouseLeave);
            }

            if (langContainer) {
                langContainer.removeEventListener('mouseenter', handleLangMouseEnter);
                langContainer.removeEventListener('mouseleave', handleLangMouseLeave);
            }
        };
    }, [menuBtnRef, menuRef, helpRef, helpContent, langRef, langContent]);


    useEffect(() => {
        const handleBody = () =>
            navDrop ? document.querySelector('body').style.overflow = 'hidden'
                : document.querySelector('body').style.overflow = 'auto'
        handleBody()
    }, [navDrop])

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

    const SelectLanguage = (language) => {
        handleLang(language)
    }

    const handleDrop = () => {
        setDrop(!navDrop)
        setInner('')
    }

    return (
        <NavStore.Provider value={{
            handleDrop, handleHelpMouseEnter,
            handleHelpMouseLeave, handleLangMouseEnter,
            handleLangMouseLeave, menuHover,
            helpHover, langHover,
            expandLang, pageLang,
            innerCategory, navDrop,
            menuRef, menuBtnRef,
            langRef, langContent,
            helpRef, helpContent,
            handleInner, SelectLanguage
        }}>
            {children}
        </NavStore.Provider>
    )
}

export const useNavContext = () => {
    return React.useContext(NavStore)
}