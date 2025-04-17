'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image 
              src="/coffee/logo.png" 
              alt="SEASIDE Café Logo" 
              width={80} 
              height={120}
              className="h-15 w-auto"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/Menu" className="text-lg font-light hover:scale-105 text-gray-900">
            Cafe Menu
          </Link>
          <Link href="/AboutUs" className="text-lg font-light hover:scale-105 text-gray-900">
            About Us
          </Link>
          <Link href="/FindUs" className="text-lg font-light hover:scale-105 text-gray-900">
            Find Us
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-white px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image 
                src="/coffee/logo.png" 
                alt="SEASIDE Café Logo" 
                width={80} 
                height={120}
                className="h-15 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            <Link
              href="/Menu"
              className="block rounded-lg px-3 py-2 text-lg font-light text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cafe Menu
            </Link>
            <Link
              href="/AboutUs"
              className="block rounded-lg px-3 py-2 text-lg font-light text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/FindUs"
              className="block rounded-lg px-3 py-2 text-lg font-light text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}