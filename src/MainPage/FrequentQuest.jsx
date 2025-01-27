import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/outline'
import { faqData } from '../utils'

const FrequentQuest = () => {

    const [question, setFaq] = useState(faqData)

    const handleQuest = (id) => {
        setFaq(question.map((quest, index) => ({
            ...quest,
            isClicked: index === id ? !quest.isClicked : quest.isClicked
        })));
    }

    return (
        <div className='p-7 pt-2'>
            <h4 className='text-2xl font-bold text-black/90 mt-3 my-3'>Frequently asked questions</h4>
            {question.map((question, index) => (

                <div key={index} className='overflow-hidden my-1'>
                    <h2 className='flex items-center text-sm md:text-lg  font-medium cursor-pointer text-black/90' onClick={() => handleQuest(index)}>
                        <span>
                            <PlusIcon className={`text-green-800 h-5 mr-1 transition-rotate duration-300 ease-in-out w-5 ${question.isClicked ? '-rotate-[135deg]' : '-rotate-180'}`} />
                        </span>
                        <span>{question.question}</span>
                    </h2>
                    <div className={`ml-5 transition-[max-height] relative duration-300 ease-in-out top-0 ${question.isClicked ? 'max-h-36' : 'max-h-0'}`}>
                        <p className={`m-0 py-1 overflow-hidden`}>
                            {question.answer}
                        </p>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default FrequentQuest
