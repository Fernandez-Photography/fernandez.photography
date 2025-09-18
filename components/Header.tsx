import React, { useState } from 'react';
import type { NavLink } from '../types';
import { MenuIcon, CloseIcon, ChevronDownIcon } from './icons';

const mainLinks: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
];

const portfolioLinks: NavLink[] = [
    { name: 'Weddings', href: '#weddings' },
    { name: 'Engagements & Proposals', href: '#engagements' },
    { name: 'Portraits', href: '#portraits' },
    { name: 'Lifestyle & Branding', href: '#branding' },
];

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
        setIsMobilePortfolioOpen(false);
    };

    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            setIsMobilePortfolioOpen(false);
        }
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-cream/80 backdrop-blur-md sticky top-0 z-50 w-full border-b border-blush/20">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-4xl font-heading font-bold text-charcoal hover:text-blush transition-colors" onClick={handleMobileLinkClick}>
                    Fernandez Photography
                </a>
                <nav className="hidden md:flex items-center space-x-8 font-body tracking-wider uppercase text-sm">
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsPortfolioOpen(true)}
                        onMouseLeave={() => setIsPortfolioOpen(false)}
                    >
                        <a href="#portfolio" className="text-charcoal hover:text-blush transition-colors">Portfolio</a>
                        {isPortfolioOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-cream shadow-lg rounded-md ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {portfolioLinks.map(link => (
                                        <a key={link.name} href={link.href} className="block px-4 py-2 text-sm text-charcoal hover:bg-blush/10 hover:text-blush transition-colors" role="menuitem">
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    {mainLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-charcoal hover:text-blush transition-colors">
                            {link.name}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} aria-label="Toggle menu" className="text-charcoal focus:outline-none">
                        {isMobileMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
                    </button>
                </div>
            </div>
            
            {/* Refactored Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-cream shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <nav className="flex flex-col text-lg border-t border-blush/20 divide-y divide-blush/20">
                  {/* Portfolio Accordion */}
                  <div className="w-full text-center">
                      <button 
                          onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)} 
                          className="text-charcoal hover:text-blush transition-colors py-4 w-full flex justify-center items-center"
                          aria-expanded={isMobilePortfolioOpen}
                          aria-controls="portfolio-submenu"
                      >
                          <span>Portfolio</span>
                          <ChevronDownIcon className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${isMobilePortfolioOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <div 
                          id="portfolio-submenu"
                          className={`overflow-hidden transition-all duration-300 ease-in-out bg-rose-water/40 ${isMobilePortfolioOpen ? 'max-h-96' : 'max-h-0'}`}
                      >
                          <div className="flex flex-col items-center pt-2 pb-4 space-y-2">
                              {portfolioLinks.map((link) => (
                                  <a key={link.name} href={link.href} className="text-charcoal/90 hover:text-blush transition-colors py-2 text-base" onClick={handleMobileLinkClick}>
                                      {link.name}
                                  </a>
                              ))}
                          </div>
                      </div>
                  </div>

                  {mainLinks.map((link) => (
                    <a key={link.name} href={link.href} className="text-charcoal hover:text-blush transition-colors w-full text-center py-4" onClick={handleMobileLinkClick}>
                        {link.name}
                    </a>
                  ))}
              </nav>
            </div>
        </header>
    );
};

export default Header;