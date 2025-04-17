'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo Section with Link */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SEASIDE Café & Restaurant</span>
            <Image alt="SEASIDE Café Logo" src="/coffee/logo.png" height={120} width={80} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/Menu" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
            Cafe Menu
          </Link>
          <Link href="/AboutUs" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
            About Us
          </Link>
          <a href="#" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
            Find Us
          </a>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SEASIDE Café Logo</span>
              <Image alt="SEASIDE Café Logo" src="/coffee/logo.png" height={120} width={80} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col">
                <Link href="/Menu" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
                  Cafe Menu
                </Link>
                <Link href="/AboutUs" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
                  About Us
                </Link>
                <a href="#" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
                  Find Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;