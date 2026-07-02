import Image from 'next/image';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  image: string;
  price: string;
  title: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
}

export function PropertyCard({ image, price, title, address, beds, baths, sqft }: PropertyCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 px-3 py-1 rounded-full text-sm font-semibold tracking-tight">
          {price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-medium text-slate-900 mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-start gap-1.5 text-slate-500 mb-6">
          <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
          <p className="text-sm line-clamp-2">{address}</p>
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-600">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4" />
            <span>{beds} <span className="hidden sm:inline">Beds</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" />
            <span>{baths} <span className="hidden sm:inline">Baths</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="h-4 w-4" />
            <span>{sqft} <span className="hidden sm:inline">sqft</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
