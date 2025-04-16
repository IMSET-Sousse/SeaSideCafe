import React from 'react';

const Title = ({ title , desc }) => {
  return (
    <div data-aos="zoom-out-up" className="flex flex-col items-center justify-center gap-3 text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      <p className="text-lg text-gray-500 max-w-xl">{desc}</p>
    </div>
  );
};

export default Title;
