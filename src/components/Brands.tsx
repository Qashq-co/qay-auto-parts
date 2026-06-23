import React from 'react';

interface BrandLogo {
  name: string;
  imageUrl: string;
}

export const TrustedBrands: React.FC = () => {
  // Configured with clean fallback image strings from an online open asset structure
  const brands: BrandLogo[] = [
    { 
      name: 'FAI Auto Parts', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/Group-61-1-1.webp' 
    },
    { 
      name: 'Guarnitauto', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/Group-61-2.webp' 
    },
    { 
      name: 'ACL', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/Group-61-3.webp' 
    },
    { 
      name: 'Glaser', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/Group-62-1.webp' 
    },
    { 
      name: 'Motive Components Ltd', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/Group-62-1-1-1.jpg.webp' 
    },
    { 
      name: 'Febi Bilstein', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/Group-62-1-1-1.jpg.webp' 
    },
    { 
      name: 'Victor Reinz', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/Group-62-1-1-3.jpg.webp' 
    },
    { 
      name: 'Yenmak', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/Group-62-1-1-4.jpg.webp' 
    },
    { 
      name: 'King Engine Bearings', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/Group-62-1-1-5.jpg.webp' 
    },
    { 
      name: 'AE Engine Parts', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/Group-62-1-1-6.jpg.webp' 
    },
    { 
      name: 'Nüral', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/Group-62-1-1-7.jpg.webp' 
    },
    { 
      name: 'Vertex Auto', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/image.jpg.webp' 
    },
    { 
      name: 'Ajusa', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/image-1-1.jpg.webp' 
    },
    { 
      name: 'Autopumps', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/image-1-1-1.jpg.webp' 
    },
    { 
      name: 'BGA', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/image-1-2.jpg.webp' 
    },
    { 
      name: 'BMS Automotive', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/image-1-4.jpg.webp' 
    },
    { 
      name: 'Corteco', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/image-1-5.jpg.webp' 
    },
    { 
      name: 'Elring Parts Ltd', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/image-1-7.jpg.webp' 
    },
    { 
      name: 'Freccia', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/image-1-9.jpg.webp' 
    },
    { 
      name: 'TDC', 
      imageUrl: 'https://titanautoparts.co.uk/wp-content/uploads/2025/10/image-1-10.jpg.webp' 
    },
  ];

  return (
    <section className="bg-brand-orange text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Content Block */}
        <div className="lg:col-span-5 space-y-4 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Trusted By Top Brands <br className="hidden sm:inline" /> Worldwide
          </h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">
            We stock a complete range of genuine and high-quality aftermarket car parts for every make and 
            model. Whether you need a crankshaft, turbo, gaskets, or service essentials, our catalog ensures 
            you get the right fit, first time.
          </p>
        </div>

        {/* Right Side: 5-Column Grid Matrix populated with live pulled images */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {brands.map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`}
              className="bg-white rounded-md p-2 h-16 sm:h-20 flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105 select-none"
              title={brand.name}
            >
              <img 
                src={brand.imageUrl} 
                alt={`${brand.name} logo component`} 
                className="max-h-full max-w-full object-contain rounded"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};