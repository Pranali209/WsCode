import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Box from './components/Box'
import KeysBox from './components/KeyBox'
import CareerOptions from './components/Options'
import Certification from './components/Certificate'
import Curriculum from './components/CurriCullam'
import Comments from './components/Comments'
import FQA from './components/Digital'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className=' mx-auto  '>
        <Header />
        <div class="flex justify-around items-center mb-8 px-16 max-md:flex-col max-md:px-6 max-md:align-middle ">
          <div class="w-1/2 max-md:w-full ">
            <h2 class="text-4xl font-bold mb-4">Career Opportunities in <span class="text-blue-500">Digital Marketing</span></h2>
            <p class="text-gray-600 mb-4">Digital marketing course so good, you only pay-after-placement</p>
            <ul class="list-disc ml-4">
              <li class="mb-2"><span class="text-green-500 font-bold">&#10004;</span> Specialization: Performance Marketing</li>
              <li class="mb-2"><span class="text-green-500 font-bold">&#10004;</span> Min salary of Rs 4.5 LPA</li>
              <li><span class="text-green-500 font-bold">&#10004;</span> 50 seats only</li>
            </ul>
            <div class="flex space-x-4 mt-4">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book 2 Days Demo</button>
              <button class="border-2 border-black hover:bg-gray-400 text-gray-800  py-2 px-4 rounded flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17 9.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zM5 19a2 2 0 01-2-2h8a2 2 0 012 2z" />
              </svg>Download Curriculum</button>
            </div>
          </div>
          <div class="w-1/3  max-md:w-full">
            <div class="bg-white p-6 rounded shadow-md">
              <h3 class="text-2xl font-bold mb-4">Book Your Free Class Now!</h3>
              <p class="text-gray-600 mb-4">2 days of free demo classes without paying in advance!</p>
              <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name"
                  class="shadow appearance-none border rounded w-full py-2 px-3
           text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name" />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email"
                  id="email"
                  class="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your Email" />
              </div>
              <div class="mb-4">
                <label for="mobile" class="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
                <div class="flex">
                  <select id="country-code" class="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="+91">+91</option>
                  </select>
                  <input type="tel" id="mobile"
                    class="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                    placeholder="Enter your mobile number" />
                </div>
              </div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register Now</button>
            </div>
          </div>
        </div>
        <div class="flex justify-evenly my-20 px-16  max-md:px-6 max-md:flex-wrap   ">
          <div class="bg-white w-[40%] p-4 rounded shadow-md text-center text-blue-600 max-md:my-4">
            <h4 class="text-2xl font-bold mb-2 text-blue-600">1000+</h4>
            <p class="text-gray-600">Students Trained</p>
          </div>
          <div class="bg-white p-4 w-[40%] rounded shadow-md text-center max-md:my-4">
            <h4 class="text-2xl font-bold mb-2 text-blue-600">₹4.5 LPA</h4>
            <p class="text-gray-600">Students Trained</p>
          </div>
          <div class="bg-white p-4 w-[40%] rounded shadow-md text-center max-md:my-4">
            <h4 class="text-2xl font-bold mb-2 text-blue-600">320+</h4>
            <p class="text-gray-600">Recruiting Partners</p>
          </div>
          <div class="bg-white p-4 w-[40%] rounded shadow-md text-center max-md:my-4">
            <h4 class="text-2xl font-bold mb-2 text-blue-600">10:00 am</h4>
            <p class="text-gray-600">Program Timings</p>
          </div>
          <div class="bg-white p-4 w-[40%] rounded shadow-md text-center col-span-2 max-md:my-4">
            <h4 class="text-2xl font-bold mb-2 text-blue-600">11th May</h4>
            <p class="text-gray-600">Next Batch Starts</p>
          </div>
        </div>

        <div className='py-10 bg-blue-50 '>
          <div className='px-16'>
            <h1 class="text-3xl font-bold text-left mb-6">Key Highlights of the Course</h1>
            <p class="text-gray-600 text-left mb-12">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
          </div>
          <KeysBox />
          <button className=' bg-blue-400 p-2 mx-[45%] text-white'> Book Now</button>
        </div>
        <div className=' px-16 bg-white max-md:px-6'>
          <CareerOptions />
        </div>

        <div className='py-10 bg-blue-50 '>
          <Certification />
        </div>
        <div className='px-16 py-5'>
          <Curriculum />
        </div>
        <div className='py-10 bg-blue-50 '>
          <div className='px-16'>
            <h1 class="text-3xl font-bold text-left mb-6">Why Learn Digital Marketing</h1>
            <p class="text-gray-600 text-left mb-12">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
          </div>
          <Box />
          <button className=' bg-blue-400 p-2 mx-[45%] text-white'> Book Now</button>
        </div>
        <div className=' px-16'>
          <Comments />
        </div>
        <div className=' px-16'>
          <div class="bg-gradient-to-r from-blue-400 to-blue-500 p-6 rounded-lg shadow-lg">
            <div class="flex flex-col items-center">
              <h2 class="text-3xl font-bold text-white mb-4">Are You Ready To Start Your Course?</h2>
              <p class="text-lg text-white mb-6">Lorem ipsum dolor sit amet consectetur. Arcu nisi diam eget id turpis donec et morbi.</p>
              <button class="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300">Book Free Class</button>
            </div>
          </div>
        </div>
        <div className='bg-blue-50 px-16'>
          <FQA/>
        </div>
        <div>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
