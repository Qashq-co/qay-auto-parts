import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FeaturedCategories } from './components/FeaturedCategories';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FactsBanner } from './components/FactsBanner';
import { Testimonials } from './components/Testimonials';
import { Products } from './pages/Products';
import FloatingTalkButton from './components/FloatingTalkButton';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {BrandCarousel} from './components/BrandCarousel';

type Page = 'home' | 'about' | 'products' | 'contact';

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
            <FeaturedCategories setCurrentPage={setCurrentPage} setSelectedCategory={setSelectedCategory} />
            <BrandCarousel/>
            <WhyChooseUs />
            <FactsBanner />
            <Testimonials />
      
          </>
        )}

        {currentPage === 'products' && (
          <Products selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        )}

        {currentPage === 'about' && (
        <About />
      )}

        {currentPage === 'contact' && (
          <Contact/>
        )}
      </main>
        <FloatingTalkButton />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;