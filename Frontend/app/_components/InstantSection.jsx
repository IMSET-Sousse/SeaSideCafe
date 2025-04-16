import Image from 'next/image'
import React from 'react'

import Layout from './Layout';
const InstantSection = () => {
  return (
    <Layout>
  <div className="bg-gray-50">
    <div className="grid sm:grid-cols-1 md:grid-cols-2 py-4 gap-6">
      
      {/* Image Container */}
      <div data-aos="fade-right" className="flex items-center justify-center order-1 p-4 sm:px-6 relative">
        <div className="relative w-full max-w-[400px] aspect-[4/3]">
          
          {/* Background Circle */}
          <Image
            alt="circle"
            src="/coffee/hand-drawn-circle-highlighting-free-png.webp"
            fill
            className="object-contain absolute inset-0 z-0 -rotate-[18deg]"
          />
          
          {/* Middle Image (Hidden on Small Screens) */}
          <Image
            alt="coffee"
            src="/coffee/coffee-banner.png"
            fill
            className="object-contain absolute z-10 -rotate-[15deg] translate-x-[-25%] translate-y-[-5%] hidden md:block"
          />
          
          {/* Front Image (Always Visible) */}
          <Image
            alt="coffee"
            src="/coffee/coffee-banner.png"
            fill
            className="object-contain relative z-20"
          />

        </div>
      </div>

      {/* Text Content */}
  

    </div>
  </div>
</Layout>
  
  )
}

export default InstantSection
