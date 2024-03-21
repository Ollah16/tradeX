import React from 'react'
import { Link } from 'react-router-dom'

const NavBrand = () => {
    return (<Link to={'/'} className={`text-3xl font-semibold text-blue-200 cursor-pointer ml-3 md:m-0 px-2
 uppercase py-5`}>TradeX</Link>
    )
}

export default NavBrand
