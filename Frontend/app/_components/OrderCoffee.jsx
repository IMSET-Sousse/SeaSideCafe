import Image from 'next/image'
import React from 'react'
import Button from './Button';
import Layout from './Layout';

const OrderCoffee = () => {
  return (
    <Layout>
      <div className='bg-gray-50  py-4'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 py-4'>
          <div data-aos="fade-right" className='flex items-center justify-end'>
              <Image alt='img' src='/coffee/coffee-mid.png' width={500} height={500} className='' />
          </div>
          <div data-aos="fade-left" className='flex flex-col items-start justify-center p-6 gap-4'>
              <h1 className='text-3xl font-bold'>Order Your Favourite Coffee</h1>
              <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem vel nostrum nemo maxime odit alias eligendi dolorum unde recusandae voluptas.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OrderCoffee
