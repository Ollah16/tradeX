import React from 'react'
import credibleImage from '../asset/credibleImage.webp'
import trustedImage from '../asset/trustedImage.webp'
import yearsImage from '../asset/yearsImage.webp'


const TradexInformation = () => {
    return (
        <div className='p-7'>
            <div>
                <h4 className='text-2xl my-5 text-gray-950/80 font-bold'>
                    What is TRADEX’s Currency Converter?
                </h4>
                <p className='text-gray-900'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore vitae, quis deleniti tempore deserunt dignissimos minus ea magnam incidunt error eius quidem ducimus laudantium esse itaque qui tempora cupiditate voluptatum.
                </p>
            </div>

            <div>
                <h4 className='text-2xl my-5 text-gray-950/80 font-bold'>
                    How to use TRADEX’s Currency Converter
                </h4>
                <p className='text-gray-900'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsam recusandae minima officia consequuntur quia, voluptatibus natus amet itaque. Sit nostrum reiciendis ea tempore doloribus iste perspiciatis. Architecto, iusto ea.
                </p>
            </div>

            <div>
                <h4 className='text-2xl my-5 text-gray-950/80 font-bold'>Why use TRADEX’s Currency Converter?</h4>
            </div>

            <div>
                <div className='h-12 mt-5 mb-9'>
                    <img className='h-full' src={yearsImage} />
                </div>
                <h3 className='text-xl my-4'>Credible and accurate</h3>
                <p className='text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum minima accusamus necessitatibus voluptate ratione assumenda doloremque recusandae culpa quod optio, expedita ipsum ipsam quidem vel est ea sunt distinctio?</p>
            </div>

            <div>
                <div className='h-12 mt-5 mb-9'>
                    <img className='h-full' src={trustedImage} />
                </div>
                <h3 className='text-xl my-4'>Trusted provider</h3>
                <p className='text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum minima accusamus necessitatibus voluptate ratione assumenda doloremque recusandae culpa quod optio, expedita ipsum ipsam quidem vel est ea sunt distinctio?</p>
            </div>

            <div>
                <div className='h-12 mt-5 mb-9'>
                    <img className='h-full' src={credibleImage} />
                </div>
                <h3 className='text-xl my-4'>Years of FX Data</h3>
                <p className='text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum minima accusamus necessitatibus voluptate ratione assumenda doloremque recusandae culpa quod optio, expedita ipsum ipsam quidem vel est ea sunt distinctio?</p>
            </div>
        </div>
    )
}

export default TradexInformation
