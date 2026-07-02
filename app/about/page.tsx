import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">About Us</h1>
          <p className="text-lg text-slate-600 mb-8">
            Luxe Real Estate is a premier luxury real estate agency dedicated to providing exceptional service and exclusive listings to discerning clients worldwide.
          </p>
          <p className="text-lg text-slate-600">
            Founded on the principles of integrity, excellence, and personalized attention, we strive to exceed expectations in every transaction, whether you are buying, selling, or investing in prime real estate.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
