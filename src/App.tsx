import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { FeaturedCategories } from './components/FeaturedCategories';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FactsBanner } from './components/FactsBanner';
import { Testimonials } from './components/Testimonials';
import { Products } from './pages/Products';
import FloatingTalkButton from './components/FloatingTalkButton';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { BrandCarousel } from './components/BrandCarousel';
import { FAQ } from './components/Faqs';
import { TrustedBrands } from './components/Brands';
import { LegalPage } from './components/LegalPage';

// Extended the Page union to include the three new legal page string states
type Page = 'home' | 'about' | 'products' | 'contact' | 'privacy' | 'shipping' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="flex flex-col min-h-screen bg-brand-lightBg font-sans antialiased text-brand-darkText">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <TrustBadges />
            <FeaturedCategories setCurrentPage={setCurrentPage} setSelectedCategory={setSelectedCategory} />
            <BrandCarousel />
            <WhyChooseUs />
            <FactsBanner />
            <Testimonials />
            <TrustedBrands />
            <FAQ />
          </>
        )}

        {currentPage === 'products' && (
          <Products selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        )}

        {currentPage === 'about' && (
          <About />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}

        {/* Legal Route Conditions pointing to your unified data page layout */}
        {currentPage === 'privacy' && (
          <LegalPage policyType="privacy" />
        )}

        {currentPage === 'shipping' && (
          <LegalPage policyType="shipping" />
        )}

        {currentPage === 'terms' && (
          <LegalPage policyType="terms" />
        )}
        
      </main>
      
      <FloatingTalkButton />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;