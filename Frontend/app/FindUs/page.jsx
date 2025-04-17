'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon, 
  ShareIcon, 
  BookmarkIcon, 
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function FindUsPage() {
  const [activeTab, setActiveTab] = useState('location');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Visit SEASIDE Café</h1>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          {['location', 'hours', 'contact'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-medium capitalize ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Location Section */}
        {activeTab === 'location' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <MapPinIcon className="h-6 w-6 text-blue-600" />
                  Our Location
                </h2>
                <p className="text-lg mb-4">Avenue Taieb Mhiri, Sousse 4000, Tunisia</p>
                
                <div className="space-y-3">
                  <Link 
                    href="https://maps.google.com/?q=SEASIDE+Cafe+Sousse" 
                    target="_blank"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    Open in Google Maps
                  </Link>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    <ShareIcon className="h-5 w-5" />
                    Share Location
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Transportation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Bus</span>
                    <span>Lines 10, 15, 23 - Stop "Sousse Médina"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Taxi</span>
                    <span>5min walk from Sousse train station</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Parking</span>
                    <span>Public parking available 100m away</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="h-full min-h-[400px] bg-white rounded-xl shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.123456789012!2d10.634829315268944!3d35.8253809801675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ5JzMxLjQiTiAxMMKwMzgnMTUuNCJF!5e0!3m2!1sen!2stn!4v1620000000000!5m2!1sen!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        )}

        {/* Hours Section */}
        {activeTab === 'hours' && (
          <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ClockIcon className="h-6 w-6 text-yellow-600" />
              Opening Hours
            </h2>
            
            <div className="space-y-4">
              {[
                { day: 'Monday - Thursday', hours: '8:00 AM - 1:00 AM' },
                { day: 'Friday - Saturday', hours: '8:00 AM - 2:00 AM' },
                { day: 'Sunday', hours: '9:00 AM - 12:00 AM' }
              ].map((item) => (
                <div key={item.day} className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium">{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Special Hours</h3>
              <p className="text-sm text-gray-600">
                Extended hours during summer season (June-August). Closed on major public holidays.
              </p>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <PhoneIcon className="h-6 w-6 text-green-600" />
                Contact Us
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <PhoneIcon className="h-5 w-5 mt-1 text-gray-500" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+21629700222" className="text-blue-600 hover:underline">
                      +216 29 700 222
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="h-5 w-5 mt-1 text-gray-500" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:info@seasidecafe.tn" className="text-blue-600 hover:underline">
                      info@seasidecafe.tn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}