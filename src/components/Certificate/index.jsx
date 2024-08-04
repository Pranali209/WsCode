import React from 'react'
import Star from '../../assets/Cert_Star.png'
import Certificate from "../../assets/Certificate.png"
function Certification() {
  return (
    <div class="flex justify-around items-center gap-10 p-16 max-md:flex-col max-md:p-6">
    <div class="flex flex-col gap-5 w-[50%] max-md:w-full">
      <h1 class="text-3xl font-bold">Get Certified</h1>
      <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
      <div class="p-5 max-md:p-0">
      <CertBox  key = "1"/>
      <CertBox key = "2"/>
      <CertBox key = "3"/>

   
  </div>
  </div>
    <div>
        <img src={Certificate} alt="Certification Star" class=""/>
    </div>
    
    </div>
  )
}

export default Certification

function CertBox(params) {
    return(
        <div class="flex justify-between items-center m-5 p-5 max-md:m-2 max-md:p-2
         bg-white rounded-lg shadow-lg max-md:w-full border-2 border-black ">
        <div class="flex gap-3 max-md:w-[50%] ">
          <img src={Star} alt="Graph Icon" class="w-16  max-md:w-12"/>
        </div>
         <div className='ml-5 max-md:ml-1'>
         <h2 class="text-xl font-bold">Career Shifting</h2>
         <p class="text-gray-500 ">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
         </div>
      </div>
    )
}