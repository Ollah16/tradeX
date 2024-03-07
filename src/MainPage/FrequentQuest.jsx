import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/outline'

const FrequentQuest = () => {

    const [faq, setFaq] = useState([
        {
            question: 'How can I convert my money?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil, quos vitae magni officia, consequatur eum fuga eveniet voluptatum autem, porro quas quibusdam iure tempora cum perferendis sint illo provident?',
            isClicked: false
        },
        {
            question: 'Which currencies can I convert with the Currency Converter?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil, quos vitae magni officia, consequatur eum fuga eveniet voluptatum autem, porro quas quibusdam iure tempora cum perferendis sint illo provident?',
            isClicked: false
        },
        {
            question: 'What other languages are available for the Currency Converter?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil, quos vitae magni officia, consequatur eum fuga eveniet voluptatum autem, porro quas quibusdam iure tempora cum perferendis sint illo provident?',
            isClicked: false
        },
        {
            question: 'What is the interbank rate and should I use it?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil, quos vitae magni officia, consequatur eum fuga eveniet voluptatum autem, porro quas quibusdam iure tempora cum perferendis sint illo provident?',
            isClicked: false
        },
        {
            question: 'Why do currency conversion rates differ between companies?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil, quos vitae magni officia, consequatur eum fuga eveniet voluptatum autem, porro quas quibusdam iure tempora cum perferendis sint illo provident?',
            isClicked: false
        },
        {
            question: 'What is the best time to exchange my money or to buy or sell currencies?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil, quos vitae magni officia, consequatur eum fuga eveniet voluptatum autem, porro quas quibusdam iure tempora cum perferendis sint illo provident?',
            isClicked: false
        }
    ])

    const handleQuest = (index) => {

        let newFaq = [...faq]

        newFaq[index].isClicked = !newFaq[index].isClicked

        setFaq(newFaq)
    }

    return (
        <div className='p-7'>
            <h4 className='text-2xl font-bold text-black/90 mt-3 my-7'>Frequently asked questions</h4>
            {faq.map((question, index) => (

                <div key={index}>
                    <h2 className='flex items-center text-lg font-medium cursor-pointer my-3 text-black/90' onClick={() => handleQuest(index)}>
                        <PlusIcon className={`text-green-800 h-5 mr-1 transition-rotate duration-500 ease-in-out w-5 ${question.isClicked ? '-rotate-[135deg]' : '-rotate-180'}`} />
                        <span>{question.question}</span>
                    </h2>

                    <p className={`pl-5 overflow-hidden transition-height duration-500 ease-in-out ${question.isClicked ? 'md:h-20 h-32' : 'h-0'}`}>
                        {question.answer}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default FrequentQuest
