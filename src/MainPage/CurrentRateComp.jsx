import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";


const CurrentRateComp = () => {
    return (
        <div>
            <div>
                <table>
                    <caption class="caption-top">
                        Live Rate Update
                    </caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Bid</th>
                            <th>Ask</th>
                        </tr>
                    </thead>
                    <tbody>
                        {map((curr, index) => (
                            <tr key={index} className={`${index + 2 ? 'border border-b border-gray-500/35' : ''}`}>
                                <td><span><IoMdArrowDropdown /></span></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h3>Popular Conversions</h3>

            </div>

        </div>
    )
}

export default CurrentRateComp
