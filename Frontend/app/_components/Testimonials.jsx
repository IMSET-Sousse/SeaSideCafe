'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import { Autoplay } from 'swiper/modules';
import Title from './Title'
import Layout from './Layout'

const Testimonails = () => {
  return (
    <Layout>
      <div className=" bg-white px-6 py-16 overflow-hidden">
        <Title title="What Our Clients Say" desc="Don't just take our word for it. Here's what our clients have to say about their experience."/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 items-center">
        {/* Swiper Section */}
        <div data-aos="fade-right" className="flex justify-center items-center px-6">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay,EffectCards]}
            // modules={[EffectCards]}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[400px]"
          >
              <SwiperSlide>
                <div className="py-6 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-xl shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300 h-full">
                  <Image
                    alt="Sweet coffee"
                    src="/coffee/man.png"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-900">John Doe</h2>
                    <p className="text-sm text-gray-600">CEO at ABC Company</p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                  </div>
                  <p className="text-center text-sm text-gray-600 px-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    enim inventore assumenda laborum.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-6 px-4 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-xl shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300 h-full">
                  <Image
                    alt="Sweet coffee"
                    src="/coffee/girl1.png"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-900">John Doe</h2>
                    <p className="text-sm text-gray-600">CEO at ABC Company</p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                  </div>
                  <p className="text-center text-sm text-gray-600 px-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    enim inventore assumenda laborum.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-6 px-4 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-xl shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300 h-full">
                  <Image
                    alt="Sweet coffee"
                    src="/coffee/girl2.png"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-900">John Doe</h2>
                    <p className="text-sm text-gray-600">CEO at ABC Company</p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                  </div>
                  <p className="text-center text-sm text-gray-600 px-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    enim inventore assumenda laborum.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-6 px-4 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-xl shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300 h-full">
                  <Image
                    alt="Sweet coffee"
                    src="/coffee/man.png"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-900">John Doe</h2>
                    <p className="text-sm text-gray-600">CEO at ABC Company</p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                  </div>
                  <p className="text-center text-sm text-gray-600 px-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    enim inventore assumenda laborum.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-6 px-4 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-xl shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300 h-full">
                  <Image
                    alt="Sweet coffee"
                    src="/coffee/girl1.png"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-900">John Doe</h2>
                    <p className="text-sm text-gray-600">CEO at ABC Company</p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                  </div>
                  <p className="text-center text-sm text-gray-600 px-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    enim inventore assumenda laborum.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-6 px-4 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-xl shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300 h-full">
                  <Image
                    alt="Sweet coffee"
                    src="/coffee/girl2.png"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-900">John Doe</h2>
                    <p className="text-sm text-gray-600">CEO at ABC Company</p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                  </div>
                  <p className="text-center text-sm text-gray-600 px-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    enim inventore assumenda laborum.”
                  </p>
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
        <div data-aos="fade-left" className="flex flex-col justify-start gap-4 max-w-md mx-auto text-center md:text-left">
          <h3 className="text-3xl font-bold text-gray-800">What Our Customers Say</h3>
          <p className="text-gray-600 text-md">
            We value our customers more than anything. Here’s what they have to say about our delicious coffee and warm service.
          </p>
          <p className="text-gray-500 text-sm">
            These stories are brewed with love — just like our coffee.
          </p>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Testimonails
