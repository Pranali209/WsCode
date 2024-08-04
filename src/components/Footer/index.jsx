import React from 'react'
import Logo from '../../assets/logo.svg'
function Footer() {
  return (
    <div class="bg-blue-900 text-white py-8 px-16">
  <div class="flex justify-center items-center">
    <img src={Logo} alt="WSCube Tech Logo" class="w-24 h-12"/>
  </div>
  <p class="text-center mt-4 text-sm">Lorem ipsum dolor sit amet consectetur. Mattis id rhoncus non fermentum quam duis faucibus blandit. Non suscipit quis sed et mus nisl lacinia massa</p>
  <div class="flex justify-center items-center mt-8">
    <p class="text-center text-xs">All rights reserved by <a href="#" class="underline">WSCube Tech</a></p>
  </div>
</div>
  )
}

export default Footer