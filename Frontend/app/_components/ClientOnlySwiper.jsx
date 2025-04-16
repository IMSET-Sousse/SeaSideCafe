'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'

const ClientOnlySwiper = ({ testimonials }) => {
  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectCards]}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[400px]"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="py-6 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-xl shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300 h-full">
            <Image
              alt={item.name}
              src={item.img}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.role}</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              {Array(item.rating).fill(0).map((_, i) => (
                <StarIcon key={i} className="w-4 h-4" />
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 px-2">
              {item.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ClientOnlySwiper
