import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-cream font-body text-charcoal">
            <header className="bg-cream/80 backdrop-blur-md sticky top-0 z-50 w-full border-b border-blush/20">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="/" className="text-4xl font-heading font-bold text-charcoal hover:text-blush transition-colors">
                        Fernandez Photography
                    </a>
                    <nav className="hidden md:flex items-center space-x-8 font-body tracking-wider uppercase text-sm">
                        <a href="/#about" className="text-charcoal hover:text-blush transition-colors">About</a>
                        <a href="/#portfolio" className="text-charcoal hover:text-blush transition-colors">Portfolio</a>
                        <a href="/#pricing" className="text-charcoal hover:text-blush transition-colors">Pricing</a>
                        <a href="/#blog" className="text-charcoal hover:text-blush transition-colors">Blog</a>
                        <a href="/#contact" className="text-charcoal hover:text-blush transition-colors">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="relative min-h-screen flex items-center justify-center text-center">
                <div 
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://picsum.photos/seed/ethereal-404/1920/1280')" }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-cream opacity-50"></div>
                </div>
                
                <div className="relative z-10 text-charcoal p-4 max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-9xl md:text-[12rem] font-heading font-normal mb-4 drop-shadow-sm text-soft-gold">
                            404
                        </h1>
                        <div className="w-24 h-1 bg-blush mx-auto mb-8"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-heading font-normal mb-6 drop-shadow-sm">
                        Oops! This Page Got Lost
                    </h2>
                    
                    <p className="text-lg md:text-xl font-body tracking-wider mb-8 max-w-2xl mx-auto drop-shadow-sm">
                        Like a beautiful moment that slipped away, this page seems to have wandered off. 
                        But don't worry – let's capture something better together.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href="/" 
                            className="bg-blush text-white font-body tracking-wider uppercase text-sm font-bold py-4 px-10 rounded-sm hover:bg-blush/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Return Home
                        </a>
                        <a 
                            href="/#contact" 
                            className="bg-soft-gold text-white font-body tracking-wider uppercase text-sm font-bold py-4 px-10 rounded-sm hover:bg-soft-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Book a Session
                        </a>
                    </div>
                    
                    <div className="mt-12 text-sm text-charcoal/70">
                        <p className="mb-2">While you're here, why not explore some of our beautiful work?</p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <a href="/#weddings" className="hover:text-blush transition-colors">Weddings</a>
                            <span className="text-soft-gold">•</span>
                            <a href="/#engagements" className="hover:text-blush transition-colors">Engagements</a>
                            <span className="text-soft-gold">•</span>
                            <a href="/#portraits" className="hover:text-blush transition-colors">Portraits</a>
                            <span className="text-soft-gold">•</span>
                            <a href="/#branding" className="hover:text-blush transition-colors">Branding</a>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-charcoal text-cream py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm font-body tracking-wider">
                        © 2024 Fernandez Photography. Capturing life's most beautiful chapters.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default NotFound;
