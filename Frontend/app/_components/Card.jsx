'use client';
import Image from 'next/image';
import React from 'react';

const Card = ({ imgSrc, title, description, buttonLabel }) => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="p-4 py-8 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-md shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300">
      <Image
        alt={title}
        src={imgSrc}
        width={100}
        height={100}
        className="rounded-full shadow-sm bg-gray-50"
      />
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-center text-sm text-gray-600 px-2">
        {description}
      </p>
      <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all">
        {buttonLabel}
      </button>
    </div>
  );
};

export default Card;
