'use client';

import Header from '../_components/Header'; // Import du Header
import Footer from '../_components/Footer'; // Import du Footer

const AboutUsPage = () => {
  return (
    <div>
      <Header /> {/* Header en haut de page */}

      <div className="max-w-4xl mx-auto py-12 px-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">About Us</h1>

        <div className="text-lg text-gray-700 space-y-6">
          <p>
            Welcome to our restaurant! We are passionate about bringing you the finest meals prepared with love, fresh ingredients, and attention to detail.
          </p>
          <p>
            Our journey started with a vision to create a space where good food meets great atmosphere. Whether you're here for a quick bite or a full course meal, we promise to give you the best experience possible.
          </p>
          <p>
            Thank you for supporting us. We look forward to serving you and making every visit memorable!
          </p>
        </div>
      </div>

      <Footer /> {/* Footer en bas de page */}
    </div>
  );
};

export default AboutUsPage;
