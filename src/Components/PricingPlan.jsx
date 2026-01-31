import React from 'react'
import { useState } from 'react'

const PricingPlan = () => {


    const plans = [
        {
            name: "Begineer Plan",
            monthly: 500,
            yearly: 5000,
            description: "Best for beginners to start their fitness journey",
            features: [
                { text: "Access to basic equipment", available: true },
                { text: "one personal training session", available: true },
                { text: "Dietary consulation", available: false },
                { text: "Access to premium classes", available: false },
            ],
        },
        {
            name: "Premium Plan",
            monthly: 800,
            yearly: 8500,
            description: "Perfect for advanced users with extra perks.",
            features: [
                { text: "Access to basic equipment", available: true },
                { text: "one personal training session", available: true },
                { text: "Dietary consulation", available: true },
                { text: "Access to premium classes", available: true },
            ],
        },
        {
            name: "Pro Plan",
            monthly: 1000,
            yearly: 10800,
            description: "Ideal for professionals aiming for peak performance.",
            features: [
                { text: "Access to basic equipment", available: true },
                { text: "one personal training session", available: true },
                { text: "Dietary consulation", available: true },
                { text: "Access to premium classes", available: true },
            ],
        }
    ]

    const [isyearly, setIsYearly] = useState(false)


    return (
        <div className='bg-gradient-to-b from-black via-gray-800 to-black py-12 px-4 md:px-8 lg:px-16'>
            <div className='text-center mb-10'>
                <h2 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>Pricing Plans</h2>
                <p className='text-lg text-gray-400 mt-3'>Choose the plan that fits you best</p>
            </div>

            <div className='flex justify-center gap-4 mb-12'>
                <button className={`px-6 py-3 rounded-full font-semibold ${isyearly ? 'bg-gray-700' : 'bg-purple-600'} text-lg text-white`}
                    onClick={() => {
                        setIsYearly(!isyearly)
                    }}
                >Monthly</button>
                <button className={`px-6 py-3 rounded-full font-semibold ${isyearly ? 'bg-purple-600' : 'bg-gray-700'} text-lg text-gray-300`}
                    onClick={() => {
                        setIsYearly(!isyearly)
                    }}
                >Yearly</button>
            </div>

            <div className='flex flex-wrap justify-center gap-6'>
                {plans.map((elem, index) => (
                    <div key={index} className=' hover:shadow-2xl hover:border-purple-600 max-w-sm w-full bg-gray-800 p-8 rounded-2xl shadow-lg transform-transition-all duration-500 border-4 border-gray-700 hover:scale-105 '>
                        <h3 className='text-2xl font-bold mb-4 text-white'>
                            {elem.name}
                        </h3>
                        <p className='text-lg text-gray-400 mb-6'>
                            {elem.description}
                        </p>
                        <p className='text-4xl font-extrabold text-white mb-4'>
                            ₹{isyearly ? elem.yearly : elem.monthly}
                            <span className='text-lg font-medium text-gray-400'> / {isyearly ? 'Year' : 'Month'} </span>
                        </p>
                        <ul className='space-y-3 mb-6'>
                           {elem.features.map((feature, i)=>(
                            <li key={i} className='flex items-center gap-3'>
                                {feature.available ? (<span className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white'>
                                         &#x2713;
                                </span>  ) :(<span className='w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white'>
                                         &#x2717;
                                </span>)}
                                <span>{feature.text}</span>
                            </li>
                           ))}
                        </ul>
                           <button className='w-full bg-purple-600 text-white py-3 rounded-full font-semibold text-lg hover:bg-purple-700 transition-duration-300'>Choose Plan</button>
                       
                        <button></button>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default PricingPlan