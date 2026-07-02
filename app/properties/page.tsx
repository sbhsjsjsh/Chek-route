import { Navbar } from '@/components/Navbar';
import { PropertyCard } from '@/components/PropertyCard';
import { Footer } from '@/components/Footer';
import { FEATURED_PROPERTIES } from '@/lib/data';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';

export default function Properties() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our Properties</h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Browse our exclusive collection of luxury properties. Find the perfect home that matches your extraordinary lifestyle.
            </p>
          </div>

          {/* Filters Bar */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
            <div className="w-full md:w-auto flex-1 max-w-2xl flex items-center bg-slate-50 rounded-full px-4 py-2">
              <MapPin className="h-5 w-5 text-slate-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Search by location, neighborhood..." 
                className="w-full px-3 py-2 bg-transparent border-none focus:outline-none focus:ring-0 text-slate-900 placeholder-slate-400 text-sm"
              />
              <button className="text-slate-400 hover:text-slate-900 transition-colors p-2">
                <Search className="h-5 w-5" />
              </button>
            </div>
            
            <div className="w-full md:w-auto flex items-center gap-4 text-sm font-medium">
              <select className="bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 cursor-pointer w-full md:w-auto">
                <option>Price: Any</option>
                <option>Under $1M</option>
                <option>$1M - $3M</option>
                <option>Over $3M</option>
              </select>
              <select className="bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 cursor-pointer w-full md:w-auto">
                <option>Property Type</option>
                <option>House</option>
                <option>Condo</option>
                <option>Villa</option>
              </select>
              <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors px-2 py-2.5">
                <SlidersHorizontal className="h-5 w-5" />
                <span>More Filters</span>
              </button>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          {/* Load More (Mock) */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 shadow-sm text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors">
              Load More Properties
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
