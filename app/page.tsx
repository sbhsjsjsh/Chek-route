import { Navbar } from '@/components/Navbar';
import { PropertyCard } from '@/components/PropertyCard';
import { Footer } from '@/components/Footer';
import { Search, MapPin, Shield, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { FEATURED_PROPERTIES } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/heroestate/1920/1080"
            alt="Luxury Real Estate Hero"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight max-w-4xl">
            Discover Your Next Exceptional Home
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl font-light">
            We provide access to the world&apos;s most exclusive properties, tailored to elevate your lifestyle.
          </p>
          
          {/* Search Mockup */}
          <div className="w-full max-w-3xl bg-white rounded-full p-2 flex items-center shadow-xl">
            <div className="flex-1 flex items-center pl-4 pr-2 border-r border-slate-200">
              <MapPin className="h-5 w-5 text-slate-400 shrink-0" />
              <input 
                type="text" 
                placeholder="City, neighborhood, or zip..." 
                className="w-full px-3 py-3 text-slate-900 bg-transparent border-none focus:outline-none focus:ring-0 placeholder-slate-400 text-sm sm:text-base"
              />
            </div>
            <button className="bg-slate-900 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm sm:text-base font-medium ml-2">
              <Search className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Featured Listings</h2>
              <p className="text-slate-600 max-w-2xl text-lg">Explore our hand-picked selection of premium properties across the country.</p>
            </div>
            <Link href="/properties" className="text-slate-900 font-medium hover:text-slate-600 transition-colors whitespace-nowrap">
              View all properties &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Services / Why Choose Us */}
      <section id="services" className="py-20 lg:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Why Choose Luxe?</h2>
            <p className="text-slate-600 text-lg">We blend decades of market expertise with a modern approach to give you the ultimate edge in real estate.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-900">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Premium Service</h3>
              <p className="text-slate-600">Experience white-glove treatment from dedicated agents available around the clock to meet your needs.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-900">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Market Expertise</h3>
              <p className="text-slate-600">Leverage our deep understanding of local trends and valuation metrics to secure the best deal possible.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-900">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Secure Transactions</h3>
              <p className="text-slate-600">Your privacy and security are paramount. We ensure every transaction is discreet and meticulously managed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-slate-900 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Find Your Home?</h2>
          <p className="text-slate-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto font-light">
            Connect with one of our luxury agents today to start your bespoke real estate journey.
          </p>
          <Link href="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-100 transition-colors shadow-lg inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
