'use client';

import { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Home className="h-6 w-6 text-slate-900" />
            <span className="font-serif font-semibold text-xl tracking-tight text-slate-900">Luxe</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
            <Link href="/properties" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Properties</Link>
            <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Services</Link>
            <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About Us</Link>
            <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              Contact Agent
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-900"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              Home
            </Link>
            <Link 
              href="/properties" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              Properties
            </Link>
            <Link 
              href="/services" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              Services
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              About Us
            </Link>
            <div className="px-3 py-4">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-slate-900 text-white px-5 py-3 rounded-full text-base font-medium hover:bg-slate-800 transition-colors">
                Contact Agent
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
