'use client';

import Header from '../_components/Header';
import Footer from '../_components/Footer';
import { MapPinIcon, PhoneIcon, ClockIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const FindUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto p-6 w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Find SEASIDE Café & Restaurant</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <MapPinIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Address</h2>
              <p className="text-lg text-gray-600">Avenue Taieb Mhiri, Sousse</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full mt-1">
                  <PhoneIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800">Contact</h3>
                  <p className="text-lg text-gray-600">29 700 222</p>
                  <div className="flex gap-4 mt-2">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">Call</button>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">Website</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full mt-1">
                  <ClockIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800">Hours</h3>
                  <ul className="text-lg text-gray-600 space-y-1">
                    <li>Thursday-Friday: 8 AM–1 AM</li>
                    <li>Saturday-Wednesday: 8 AM–1 AM</li>
                  </ul>
                  <button className="mt-2 text-blue-600 hover:text-blue-800 font-medium">
                    Suggest new hours
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium">3.7219 ★ Google reviews</span>
                  <span className="text-gray-600">TND 20–30 ‧ Restaurant</span>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                    <ShareIcon className="h-5 w-5" />
                    Share
                  </button>
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                    <BookmarkIcon className="h-5 w-5" />
                    Save
                  </button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="text-xl font-medium mb-2">Service options</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>✓ Has outdoor seating</li>
                  <li>✓ Serves great cocktails</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-200 rounded-xl h-96 w-full flex items-center justify-center">
          <p className="text-gray-500 text-lg">Google Map will be embedded here</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindUsPage;