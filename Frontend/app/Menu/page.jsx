'use client';

import Header from '../_components/Header'; // Import the Header component
import { menuData } from './menuData'; // Import the menuData
import Footer from '../_components/Footer'; // Import the Footer component

const MenuPage = () => {
  return (
    <div>
      <Header /> {/* Add Header component */}
      
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Menu</h1>

        {menuData.map((category, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">{category.category}</h2>
            <div className="mt-4 space-y-4">
              {category.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-lg">
                  <span>{item.name}</span>
                  <span>{item.price} TND</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default MenuPage;
