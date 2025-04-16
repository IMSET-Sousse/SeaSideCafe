'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
 
  PopoverGroup,

} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const  Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <header className="bg-gray-50 shadow-md">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="/coffee/logo.png"
                height={120}
                width={80}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
              Cafe Menu
            </a>
            <a href="#" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
              About Us
            </a>
            <a href="#" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
              Find Us
            </a>
           
          </PopoverGroup>
          
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  alt=""
                  src="/coffee/logo.png"
                  height={120}
                  width={80}
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col">
                <a data-aos="fade-right" href="#" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
                  Cafe Menu
                </a>
                <a data-aos="fade-right" href="#" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
                  About Us
                </a>
                <a data-aos="fade-right" href="#" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
                  Find Us
                </a>
                <a data-aos="fade-right" href="#" className="text-lg font-light transition-all duration-200 ease-in-out hover:scale-105 text-gray-900">
                  Alowishus Catering
                </a>
              </div>
            </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  )
}
export default Header;