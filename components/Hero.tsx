import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-center">
            <div 
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://picsum.photos/seed/ethereal-bride/1920/1280')" }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-cream opacity-40"></div>
            </div>
            <div className="relative z-10 text-charcoal p-4 max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-heading font-normal mb-4 drop-shadow-sm">Capturing Life's Most Beautiful Chapters</h1>
                <p className="text-lg md:text-xl font-body tracking-wider uppercase drop-shadow-sm">
                    Feminine, light-filled photography for the modern romantic in Austin, TX and beyond.
                </p>
                <a href="#contact" className="mt-8 inline-block bg-blush text-white font-body tracking-wider uppercase text-sm font-bold py-4 px-10 rounded-sm hover:bg-blush/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Book Your Session
                </a>
            </div>
        </section>
    );
};

export default Hero;