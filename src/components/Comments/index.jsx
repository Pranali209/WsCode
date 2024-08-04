import React from 'react'
import Person from '../../assets/person.png'
function Comments() {
  return (
    <div class="container mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-center mb-8">What Our Students Are Saying!</h2>
    <p class="text-center text-gray-600 mb-16">Lorem ipsum dolor sit amet consectetur Imperdiet tellus ut ornare pharetra.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-center mb-4">
          <img src= {Person} alt="Matt Cannon" class="rounded-full mr-4"/>
          <div>
            <h3 class="text-xl font-bold">Matt Cannon</h3>
            <p class="text-gray-600">September 1, 2023</p>
          </div>
        </div>
        <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur. Arcu nisi diam eget id turpis donec et morbi. Sit eu nisl non scelerisque vestibulum pulvinar. Condimentum massa bibendum pretium tincidunt sed vel.</p>
      </div>
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-center mb-4">
          <img src= {Person} alt="Matt Cannon" class="rounded-full mr-4"/>
          <div>
            <h3 class="text-xl font-bold">Matt Cannon</h3>
            <p class="text-gray-600">September 1, 2023</p>
          </div>
        </div>
        <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur. Arcu nisi diam eget id turpis donec et morbi. Sit eu nisl non scelerisque vestibulum pulvinar. Condimentum massa bibendum pretium tincidunt sed vel.</p>
      </div>
    </div>
  </div>
  )
}

export default Comments