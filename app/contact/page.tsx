import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Contact Us</h1>
            <p className="text-slate-600 text-lg">Reach out to our agents to begin your journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-slate-900 shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-900">Our Office</h3>
                  <p className="text-slate-600 mt-1">123 Luxury Ave, Suite 500<br/>Beverly Hills, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-slate-900 shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-900">Phone</h3>
                  <p className="text-slate-600 mt-1">+1 (800) 555-0199</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-slate-900 shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-900">Email</h3>
                  <p className="text-slate-600 mt-1">inquiries@luxerealestate.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-slate-900 text-white px-5 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
