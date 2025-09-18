import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-cream font-body text-charcoal tracking-normal">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Pricing />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;