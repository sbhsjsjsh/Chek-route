import { Home, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Home className="h-6 w-6" />
              <span className="font-serif font-semibold text-xl tracking-tight">Luxe</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Elevating the standard of luxury real estate with unparalleled service and exclusive listings worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/properties" className="hover:text-white transition-colors">Featured Properties</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Agent</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-slate-500" />
                <span>123 Luxury Ave, Suite 500<br/>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-slate-500" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-slate-500" />
                <span>inquiries@luxerealestate.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Luxe Real Estate. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social Links Placeholders */}
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
