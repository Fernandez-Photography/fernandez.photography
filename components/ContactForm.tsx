import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [occasion, setOccasion] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email && message && occasion) {
            setSubmitted(true);
        } else {
            alert('Please fill out all fields.');
        }
    };

    if (submitted) {
        return (
            <section id="contact" className="py-20 md:py-32 bg-cream">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-heading text-charcoal mb-4">Thank You!</h2>
                    <p className="text-lg text-charcoal/80">Your message has been sent. Erika will get back to you shortly.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-20 md:py-28 bg-cream">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-heading text-charcoal mb-4">Get In Touch</h2>
                    <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">Ready to book your session or have a question? Fill out the form below, and I'll get back to you as soon as possible.</p>
                </div>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-charcoal mb-2 font-body tracking-wider uppercase text-sm">Name</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 bg-white border border-rose-water rounded-sm focus:outline-none focus:ring-2 focus:ring-blush transition" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-charcoal mb-2 font-body tracking-wider uppercase text-sm">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 bg-white border border-rose-water rounded-sm focus:outline-none focus:ring-2 focus:ring-blush transition" />
                        </div>
                    </div>
                    <div className="mb-6">
                         <label htmlFor="occasion" className="block text-charcoal mb-2 font-body tracking-wider uppercase text-sm">Occasion Type</label>
                         <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} className="w-full p-3 bg-white border border-rose-water rounded-sm focus:outline-none focus:ring-2 focus:ring-blush transition appearance-none bg-no-repeat bg-right-4" style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%235C5048' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundSize: '1.5em 1.5em'}}>
                            <option value="" disabled>Select an option...</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Engagement">Engagement / Proposal</option>
                            <option value="Portrait">Portrait Session</option>
                             <option value="Branding">Lifestyle / Branding</option>
                             <option value="Other">Other</option>
                         </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-charcoal mb-2 font-body tracking-wider uppercase text-sm">Message</label>
                        <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 bg-white border border-rose-water rounded-sm focus:outline-none focus:ring-2 focus:ring-blush transition"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blush text-white font-body tracking-wider uppercase text-sm font-bold py-4 px-12 rounded-sm hover:bg-blush/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;