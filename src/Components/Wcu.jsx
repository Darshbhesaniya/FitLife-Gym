import React from 'react'
import wcu1 from '../assets/wcu1.jpg'
import wcu2 from '../assets/wcu2.jpg'
import wcu3 from '../assets/wcu3.jpg'

const Wcu = () => {
    return (
        <div className='bg-gradient-to-b from-black via-gray-800 to-black py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-300 via-indigo-300 to-teal-300 text-transparent bg-clip-text'>Why Choose Us</h2>
                    <p className='mt-4 text-gray-300 text-sm sm:text-base lg:text-lg font-light'>Discover Why We Stand Out With Quality, commitment, and result.</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-12'>
                    <div className='lg:w-1/2 w-full'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 -ml-2 lg:-ml-6 xl:-ml-8'>
                            <div className='flex flex-col justify-center items-center space-y-4 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'>
                                <h4 className='font-extrabold text-lg sm:text-xl text-center'>Expert Trainers</h4>
                                <p className='text-sm sm:text-md font-light text-center'>Highly Qualified Trainers to help you achieve your goals</p>
                            </div>

                             <div className='flex flex-col justify-center items-center space-y-4 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'>
                                <h4 className='font-extrabold text-lg sm:text-xl text-center'>Expert Trainers</h4>
                                <p className='text-sm sm:text-md font-light text-center'>Highly Qualified Trainers to help you achieve your goals</p>
                            </div>

                             <div className='flex flex-col justify-center items-center space-y-4 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'>
                                <h4 className='font-extrabold text-lg sm:text-xl text-center'>Expert Trainers</h4>
                                <p className='text-sm sm:text-md font-light text-center'>Highly Qualified Trainers to help you achieve your goals</p>
                            </div>

                             <div className='flex flex-col justify-center items-center space-y-4 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'>
                                <h4 className='font-extrabold text-lg sm:text-xl text-center'>Expert Trainers</h4>
                                <p className='text-sm sm:text-md font-light text-center'>Highly Qualified Trainers to help you achieve your goals</p>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/2 w-full'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            <div className='grid grid-rows-2 gap-6'>
                                <img className='w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300' loading='lazy' src={wcu1} alt="wcu1" />

                                <img className='w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300' src={wcu2} alt="wcu2" />
                            </div>
                            <div className='w-full '>
                                <img src={wcu3} className='w-full h-full object-covers rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300 ' alt="award Winning Services" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wcu