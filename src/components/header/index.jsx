import React from 'react'
import Logo from '../../assets/logo.svg'
import watsup from '../../assets/watsup.png'
function Header() {
  return (
    
    <div class="flex py-5  justify-around items-center mb-8 max-md:items-stretch">
      <div class="flex items-center">
        <img src={Logo} alt="WSCube Tech Logo" class="mr-4"/>
        
      </div>
      <div class="flex space-x-4">
        <button class="border-2 border-green-700 hover:bg-blue-700 text-green-700 font-bold p-2 rounded">
            <img src={watsup} alt='watsup' className='inline-block'/>Chat With Us</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Call Us</button>
      </div>
    </div>
  
  )
}

export default Header
