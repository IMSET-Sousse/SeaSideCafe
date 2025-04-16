import React from 'react';

const Button = ({ label }) => {
  return (
    <button
      className={`mt-2 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all`}
    >
      {label}
    </button>
  );
};

export default Button;