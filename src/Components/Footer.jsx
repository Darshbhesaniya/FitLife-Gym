import React from 'react'
import { Link } from 'react-scroll'
import { Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
   <footer className='bg-gradient-to-b from-black via-gray-900 to-black text-white font-poppins'>
            <div className='container mx-auto px-4 py-10 grid gris-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h1 className='text-3xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-extrabold tracking-wider'>FitLife Gym</h1>
                    <p className='text-gray-400 mt-4 leading-relaxed'>Empowering lives through fitness. Join us on a journey to achieve a healthier and stronger version of you.</p>
                </div>
                <div>
                    <h2 className='text-2xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold  '>Quick Links</h2>
                   <ul className='mt-4 space-y-2'>
                    <li>
                        <Link to='home' className='cursor-pointer hover:underline hover:text-gray-300'>Home</Link>
                    </li>
                    <li>
                        <Link  to='Opinions'  className='cursor-pointer hover:underline hover:text-gray-300'>Opinions</Link>
                    </li>
                    <li>
                          <Link to='trainers' className='cursor-pointer hover:underline hover:text-gray-300'>Trainers</Link>
                    </li>
                    <li>
                          <Link to='contact' className='cursor-pointer hover:underline hover:text-gray-300'>Contact</Link>
                    </li>
                   </ul>
                </div>
                <div>
                    <h2 className='text-2xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold'>Follow Us</h2>
                    <div className='flex mt-4 space-x-4'>
                        <Link to='home' className='p-3 bg-gray-700 rounded-full hover:bg-blue-700 transition'>
                                 <Facebook />
                        </Link>
                        <Link to='home' className='p-3 bg-gray-700 rounded-full hover:bg-blue-700 transition'>
                               <Twitter />
                        </Link>
                        <Link to='home' className='p-3 bg-gray-700 rounded-full hover:bg-red-700 transition'>
                               <Instagram />
                        </Link>
                        <Link to='home' className='p-3 bg-gray-700 rounded-full hover:bg-blue-700 transition'>
                               <Linkedin />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='bg-gray-900 text-gray-500 text-center py-4'>
                <p>© 2025 FitLife Gym. All rights reserved.</p>
                <p className='text-white hover:text-purple-400 cursor-pointer'>HexagonDigitalServices</p>
            </div>
   </footer>
  )
}

export default Footer