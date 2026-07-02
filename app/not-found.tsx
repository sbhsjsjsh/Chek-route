'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center pt-16">
          <div>
            <h1 className="text-8xl sm:text-9xl font-serif font-bold text-slate-200">404</h1>
            <h2 className="mt-6 text-3xl font-serif font-bold text-slate-900 tracking-tight sm:text-4xl">
              Page not found
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-light">
              We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button 
              onClick={() => router.back()}
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
