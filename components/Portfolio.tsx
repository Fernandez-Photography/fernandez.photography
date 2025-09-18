import React from 'react';
import type { GalleryImage } from '../types';

const allImages: GalleryImage[] = [
    // Weddings
    { id: 1, src: 'https://picsum.photos/seed/dreamy-wedding1/500/700', alt: 'Elegant bride holding a bouquet', category: 'wedding', height: 700 },
    { id: 2, src: 'https://picsum.photos/seed/dreamy-wedding2/500/800', alt: 'Groom looking at his bride', category: 'wedding', height: 800 },
    { id: 3, src: 'https://picsum.photos/seed/dreamy-wedding3/500/600', alt: 'Close up of wedding rings on a flower', category: 'wedding', height: 600 },
    { id: 4, src: 'https://picsum.photos/seed/dreamy-wedding4/500/750', alt: 'Couple during their first dance', category: 'wedding', height: 750 },
    // Engagements
    { id: 5, src: 'https://picsum.photos/seed/dreamy-engagement1/500/350', alt: 'Couple laughing together outdoors', category: 'engagement', height: 350 },
    { id: 6, src: 'https://picsum.photos/seed/dreamy-engagement2/500/650', alt: 'Proposal on a scenic overlook', category: 'engagement', height: 650 },
    { id: 7, src: 'https://picsum.photos/seed/dreamy-engagement3/500/500', alt: 'Couple holding hands showing engagement ring', category: 'engagement', height: 500 },
    { id: 8, src: 'https://picsum.photos/seed/dreamy-engagement4/500/700', alt: 'Couple embracing in a field', category: 'engagement', height: 700 },
    // Portraits
    { id: 9, src: 'https://picsum.photos/seed/dreamy-portrait1/500/750', alt: 'Portrait of a woman in a field of flowers', category: 'portrait', height: 750 },
    { id: 10, src: 'https://picsum.photos/seed/dreamy-portrait2/500/650', alt: 'Maternity photo in a sunlit room', category: 'portrait', height: 650 },
    { id: 11, src: 'https://picsum.photos/seed/dreamy-portrait3/500/700', alt: 'Senior portrait in an urban setting', category: 'portrait', height: 700 },
    { id: 12, src: 'https://picsum.photos/seed/dreamy-portrait4/500/600', alt: 'Family portrait in a park', category: 'portrait', height: 600 },
    // Branding
    { id: 13, src: 'https://picsum.photos/seed/dreamy-branding1/500/400', alt: 'Lifestyle shot of a woman working on a laptop', category: 'branding', height: 400 },
    { id: 14, src: 'https://picsum.photos/seed/dreamy-branding2/500/600', alt: 'Creative professional in her studio', category: 'branding', height: 600 },
    { id: 15, src: 'https://picsum.photos/seed/dreamy-branding3/500/500', alt: 'Product photography for a local artisan', category: 'branding', height: 500 },
    { id: 16, src: 'https://picsum.photos/seed/dreamy-branding4/500/700', alt: 'Headshot for a small business owner', category: 'branding', height: 700 },
];

const PortfolioSection: React.FC<{ id: string; title: string; images: GalleryImage[] }> = ({ id, title, images }) => (
    <div id={id} className="py-16 md:py-20">
        <div className="text-center mb-12">
            <h3 className="text-4xl md:text-6xl font-heading text-charcoal">{title}</h3>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map(image => (
                <div key={image.id} className="overflow-hidden rounded-sm shadow-lg break-inside-avoid group relative">
                   <img 
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                        src={image.src} 
                        alt={image.alt}
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-blush/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            ))}
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-20 md:py-28 bg-cream">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-heading text-charcoal mb-4">Our Portfolio</h2>
                    <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">A curated collection of moments we've had the honor of capturing. Each photo tells a unique story of love, joy, and connection.</p>
                </div>
                
                <PortfolioSection id="weddings" title="Weddings" images={allImages.filter(img => img.category === 'wedding')} />
                <PortfolioSection id="engagements" title="Engagements & Proposals" images={allImages.filter(img => img.category === 'engagement')} />
                <PortfolioSection id="portraits" title="Portraits" images={allImages.filter(img => img.category === 'portrait')} />
                <PortfolioSection id="branding" title="Lifestyle & Branding" images={allImages.filter(img => img.category === 'branding')} />
            </div>
        </section>
    );
};

export default Portfolio;