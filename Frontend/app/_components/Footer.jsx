'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-50 rounded-lg shadow-sm dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Image
              src="/coffee/logo.png"
              alt="coffee Logo"
              width={32}
              height={32}
              className="h-8 w-auto block sm:hidden"
            />
        
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 <Link href="" className="hover:underline">SeaSide Cafe</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
