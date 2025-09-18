import React from 'react';
import type { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'A Sun-Drenched Hill Country Wedding',
        excerpt: 'Join us for a look back at Sarah and Tom’s beautiful wedding day, filled with laughter, happy tears, and golden light...',
        imageUrl: 'https://picsum.photos/seed/ethereal-wedding-blog/600/400',
        link: '#',
    },
    {
        id: 2,
        title: 'Downtown Austin Engagement Session',
        excerpt: 'We explored the vibrant streets of downtown Austin with Jessica and Mike for their fun and modern engagement shoot...',
        imageUrl: 'https://picsum.photos/seed/austin-couple-blog/600/400',
        link: '#',
    },
    {
        id: 3,
        title: '5 Tips for a Stress-Free Portrait Session',
        excerpt: 'Getting in front of the camera can be nerve-wracking! Here are my top 5 tips to help you relax and enjoy the experience...',
        imageUrl: 'https://picsum.photos/seed/camera-flatlay-blog/600/400',
        link: '#',
    }
];

const Blog: React.FC = () => {
    const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert('Thank you for your interest! This blog post is coming soon.');
    };

    return (
        <section id="blog" className="py-20 md:py-28 bg-rose-water">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-heading text-charcoal mb-4">From The Blog</h2>
                    <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">Sharing recent sessions, photography tips, and stories from behind the lens.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-cream rounded-sm shadow-lg overflow-hidden group">
                            <a href={post.link} onClick={handleBlogClick} className="block cursor-pointer">
                                <img 
                                    src={post.imageUrl} 
                                    alt={post.title}
                                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-6">
                                    <h3 className="text-3xl font-heading text-charcoal mb-2">{post.title}</h3>
                                    <p className="text-charcoal/80 mb-4">{post.excerpt}</p>
                                    <span className="font-body tracking-wider uppercase text-sm font-bold text-blush group-hover:underline">Read More</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;