import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Title from './Title'
import Layout from './Layout'

const BestSelling = () => {
  return (
    <Layout>
        <div className='bg-white py-8 flex flex-col items-center justify-center gap-4'>
                <Title title="Best Selling Coffee" desc="A drink from the 'My Alowishus' bottled brews range or grab one of our delecious."/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8 w-full max-w-7xl mx-auto">
                    <div  data-aos="fade-up" data-aos-anchor-placement="top-center" className="p-6 flex flex-col gap-6 border border-neutral-200 rounded-xl shadow-md bg-gradient-to-b from-gray-100 to-white hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Image
                            alt="Sweet coffee"
                            src="/coffee/mid1.png"
                            width={120}
                            height={120}
                            className="object-contain"
                        />
                        <div className="text-center sm:text-left">
                            <p className="text-sm text-gray-500 font-light">#1 Selling</p>
                            <h2 className="text-xl font-bold text-gray-800">Double Expresso</h2>
                        </div>
                        </div>
                        <p className="text-sm text-gray-600 text-center sm:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim inventore assumenda laborum.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <h1 className="text-lg text-gray-400 font-light">$12.20</h1>
                        </div>
                    </div>
                    <div  data-aos="fade-up" data-aos-anchor-placement="top-center" className="p-6 flex flex-col gap-6 border border-neutral-200 rounded-xl shadow-md bg-gradient-to-b from-gray-100 to-white hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Image
                            alt="Sweet coffee"
                            src="/coffee/mid1.png"
                            width={120}
                            height={120}
                            className="object-contain"
                        />
                        <div className="text-center sm:text-left">
                            <p className="text-sm text-gray-500 font-light">#1 Selling</p>
                            <h2 className="text-xl font-bold text-gray-800">Double Expresso</h2>
                        </div>
                        </div>
                        <p className="text-sm text-gray-600 text-center sm:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim inventore assumenda laborum.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <h1 className="text-lg text-gray-400 font-light">$12.20</h1>
                        </div>
                    </div>
                    <div  data-aos="fade-up" data-aos-anchor-placement="top-center" className="p-6 flex flex-col gap-6 border border-neutral-200 rounded-xl shadow-md bg-gradient-to-b from-gray-100 to-white hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Image
                            alt="Sweet coffee"
                            src="/coffee/mid1.png"
                            width={120}
                            height={120}
                            className="object-contain"
                        />
                        <div className="text-center sm:text-left">
                            <p className="text-sm text-gray-500 font-light">#1 Selling</p>
                            <h2 className="text-xl font-bold text-gray-800">Double Expresso</h2>
                        </div>
                        </div>
                        <p className="text-sm text-gray-600 text-center sm:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim inventore assumenda laborum.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <h1 className="text-lg text-gray-400 font-light">$12.20</h1>
                        </div>
                    </div>
                </div>
            </div>
    </Layout>
  )
}

export default BestSelling
