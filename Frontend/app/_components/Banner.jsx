'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Layout from './Layout';

const Banner = () => {
  return (
    <Layout>
      <div className="bg-gray-50">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          <SwiperSlide>
            <div className="px-6 md:px-6">
              <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8">
                
                {/* Text Content */}
                <div data-aos="fade-right" className="flex justify-center md:justify-end">
                  <div className="max-w-xl space-y-6 text-center md:text-left">
                    <div className="relative">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        Welcome to <br /> SeaSide Coffee
                      </h1>
                   
                    </div>
                 
                    
                  </div>
                </div>

                {/* Image */}
                <div data-aos="fade-left" className="flex justify-center">
                  <Image
                    src="/coffee/seaside2.png"
                    alt="Coffee Hero"
                    width={500}
                    height={500}
                    className="max-w-full h-auto"
                  />
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-6 md:px-6">
              <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8">
                
                {/* Text Content */}
                <div data-aos="fade-right" className="flex justify-center md:justify-end">
                  <div className="max-w-xl space-y-6 text-center md:text-left">
                    <div className="relative">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        Welcome to <br /> SeaSide Coffee
                      </h1>
                  
                    </div>

                    
                  </div>
                </div>

                {/* Image */}
                <div data-aos="fade-left" className="flex justify-center md:justify-start">
                  <Image
                    src="/coffee/seaside1.png"
                    alt="Coffee Hero"
                    width={400}
                    height={400}
                    className="max-w-full h-auto"
                  />
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-6 md:px-6">
              <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8">
                
                {/* Text Content */}
                <div data-aos="fade-right" className="flex justify-center md:justify-end">
                  <div className="max-w-xl space-y-6 text-center md:text-left">
                    <div className="relative">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        Welcome to <br /> SeaSide Coffee
                      </h1>
                   
                    </div>
                 
                    
                  </div>
                </div>

                {/* Image */}
                <div data-aos="fade-left" className="flex justify-center overflow-hidden">
                  <Image
                    src="/coffee/seaside3.png"
                    alt="Coffee Hero"
                    width={300}
                    height={300}
                    className="max-w-full h-auto"
                  />
                </div>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Layout>
  );
};

export default Banner;
