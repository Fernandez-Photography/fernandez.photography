import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-rose-water relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center relative">
                <div className="md:col-span-2 flex justify-center">
                    <img 
                        src="https://picsum.photos/seed/soft-portrait/400/550" 
                        alt="Erika Fernandez, photographer"
                        className="rounded-sm shadow-2xl object-cover w-full max-w-sm h-[550px]"
                    />
                </div>
                 <div className="md:col-span-3 text-center md:text-left">
                    <h2 className="text-5xl md:text-7xl font-heading text-charcoal mb-6">Hello, I'm Erika</h2>
                    <div className="text-lg text-charcoal/80 leading-relaxed space-y-4 max-w-xl">
                        <p>
                            I'm a passionate photographer based in the heart of Austin, Texas. My style is all about capturing the genuine, fleeting moments—the soft glances, the joyful laughter, and the quiet love stories that unfold in front of my lens.
                        </p>
                        <p>
                           I believe photography is more than just pictures; it's about preserving memories with an artistic, feminine touch. I strive to create a comfortable and fun atmosphere where you can be yourself, allowing me to capture your unique personality and connection.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;