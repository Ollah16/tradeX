import React from 'react'
import LanguageListComp from './LanguageListComp'
import HelpContainerComp from './HelpContainerComp'

const InnerExpandComponent = () => {
    return (
        <div>
            <LanguageListComp />
            <HelpContainerComp />
        </div>
    )
}

export default InnerExpandComponent
