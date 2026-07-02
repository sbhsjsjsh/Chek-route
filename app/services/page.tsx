import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Shield, Star, TrendingUp } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Services</h1>
            <p className="text-slate-600 text-lg">We provide an unparalleled real estate experience.</p>
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
      </main>
      <Footer />
    </div>
  );
}
