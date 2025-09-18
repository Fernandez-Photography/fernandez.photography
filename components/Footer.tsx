import React from 'react';
import { InstagramIcon, FacebookIcon, MailIcon } from './icons';

const instagramImages = [
    { id: 1, src: 'https://picsum.photos/seed/romantic-insta1/300/300', alt: 'Instagram post 1' },
    { id: 2, src: 'https://picsum.photos/seed/romantic-insta2/300/300', alt: 'Instagram post 2' },
    { id: 3, src: 'https://picsum.photos/seed/romantic-insta3/300/300', alt: 'Instagram post 3' },
    { id: 4, src: 'https://picsum.photos/seed/romantic-insta4/300/300', alt: 'Instagram post 4' },
    { id: 5, src: 'https://picsum.photos/seed/romantic-insta5/300/300', alt: 'Instagram post 5' },
    { id: 6, src: 'https://picsum.photos/seed/romantic-insta6/300/300', alt: 'Instagram post 6' },
];

const instagramProfileUrl = 'https://www.instagram.com/fernandezphotography/';
const facebookProfileUrl = 'https://www.facebook.com/fernandezphotography/';

const Footer: React.FC = () => {
    return (
        <footer className="bg-cream">
            <div className="container mx-auto px-6 py-16 text-center">
                <h3 className="font-heading text-5xl text-charcoal mb-2">Follow Along on Instagram</h3>
                <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer" className="text-blush hover:underline font-body tracking-wider">@fernandezphoto</a>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 my-8 max-w-4xl mx-auto">
                    {instagramImages.map(img => (
                        <a key={img.id} href={instagramProfileUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden aspect-square">
                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"/>
                        </a>
                    ))}
                </div>
            </div>
            <div className="bg-cream border-t border-blush/20 py-8">
                <div className="container mx-auto px-6 text-center text-charcoal">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blush transition-colors">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blush transition-colors">
                            <FacebookIcon className="w-6 h-6" />
                        </a>
                        <a href="#contact" aria-label="Email" className="hover:text-blush transition-colors">
                            <MailIcon className="w-6 h-6" />
                        </a>
                    </div>
                    <p className="font-heading text-4xl mb-2">Fernandez Photography</p>
                    <p className="text-sm text-charcoal/70">&copy; {new Date().getFullYear()} Fernandez Photography. All Rights Reserved. | Austin, TX</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;