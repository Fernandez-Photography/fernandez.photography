import React from 'react';
import type { PricingPlan } from '../types';

const plans: PricingPlan[] = [
    {
        title: 'The Portrait Session',
        price: '$350',
        description: 'Perfect for individuals, couples, or small families looking for beautiful, timeless portraits.',
        features: [
            '1-hour session at one location',
            '25 professionally edited digital images',
            'Online gallery for viewing and sharing',
            'Print release for all delivered photos',
        ],
    },
    {
        title: 'The Wedding Collection',
        price: 'Starting at $2,800',
        description: 'Comprehensive coverage for your special day, capturing every detail from start to finish.',
        features: [
            '8 hours of wedding day coverage',
            '400+ professionally edited images',
            'Complimentary engagement session',
            'Online gallery & custom USB drive',
            'Personalized consultation & timeline planning',
        ],
    },
    {
        title: 'The Engagement Session',
        price: '$500',
        description: 'Ideal for engagements, proposals, or anniversary shoots that deserve to be beautifully documented.',
        features: [
            'Up to 2 hours of coverage',
            '50+ professionally edited digital images',
            'Multiple locations & outfit changes',
            'Online gallery for easy downloading',
        ],
    }
];

const PricingCard: React.FC<{ plan: PricingPlan; isFeatured: boolean }> = ({ plan, isFeatured }) => (
    <div className={`p-8 rounded-sm shadow-xl flex flex-col transform hover:-translate-y-2 transition-transform duration-300 ${isFeatured ? 'bg-charcoal text-cream scale-105' : 'bg-rose-water text-charcoal'}`}>
        <h3 className="text-4xl font-heading font-bold mb-2">{plan.title}</h3>
        <p className={`text-4xl font-heading mb-4 ${isFeatured ? 'text-soft-gold' : 'text-blush'}`}>
            {plan.price}
        </p>
        <p className={`mb-6 h-24 ${isFeatured ? 'text-cream/90' : 'text-charcoal/80'}`}>{plan.description}</p>
        <ul className="space-y-3 mb-8 text-left">
            {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <svg className={`w-5 h-5 mr-3 flex-shrink-0 mt-1 ${isFeatured ? 'text-soft-gold' : 'text-blush'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <a href="#contact" className={`mt-auto text-center font-body tracking-wider uppercase text-sm font-bold py-3 px-6 rounded-sm transition-all duration-300 ${isFeatured ? 'bg-cream text-charcoal hover:bg-cream/90' : 'bg-blush text-white hover:bg-blush/90'}`}>
            Inquire Now
        </a>
    </div>
);

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-20 md:py-28 bg-white/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-heading text-charcoal mb-4">Investment</h2>
                    <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">Choose a package that suits your needs or contact us for a custom quote. We believe in transparent pricing for timeless memories.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    <PricingCard plan={plans[0]} isFeatured={false} />
                    <PricingCard plan={plans[1]} isFeatured={true} />
                    <PricingCard plan={plans[2]} isFeatured={false} />
                </div>
            </div>
        </section>
    );
};

export default Pricing;