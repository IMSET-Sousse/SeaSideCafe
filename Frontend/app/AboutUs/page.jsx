'use client';

import Image from 'next/image';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

const AboutUsPage = () => {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">About SEASIDE Café & Restaurant</h1>
        <Image
          src="/coffee/seaside3.png"
          alt="About SEASIDE Café"
          width={200}
          height={200}
          className="rounded-2xl shadow-lg mx-auto mb-6"
          priority
        />
        <p className="text-lg text-gray-700 leading-8 mb-4">
          Welcome to SEASIDE Café & Restaurant — your cozy seaside escape for delightful coffee moments, fresh pastries,
          and a welcoming atmosphere. Our story started with a love for specialty coffee and a desire to create a unique,
          relaxed experience for our community.
        </p>
        <p className="text-lg text-gray-700 leading-8">
          Every cup we serve tells a story — carefully sourced beans, expert roasting, and passionate baristas come
          together to make your experience memorable. Thank you for making us part of your day!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;