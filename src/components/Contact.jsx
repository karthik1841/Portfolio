import React from 'react';
import contactBgVideo from '../assets/contact_assets/contact_bg.mp4';

const ContactSection = () => {
    return (
        <div id="contact" className="relative min-h-screen text-white font-sans flex items-center overflow-hidden [clip-path:inset(0)]">
            
            {/* Background Video */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="fixed top-0 left-0 w-full h-[100vh] object-cover z-0"
            >
                <source src={contactBgVideo} type="video/mp4" />
            </video>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col lg:flex-row gap-20 lg:gap-32 relative z-10">
                
                {/* Left Side: Contact Info */}
                <div className="w-full lg:w-5/12 flex flex-col justify-start">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl mb-16">
                        Get in touch
                    </h2>

                    <div className="flex flex-col gap-10">
                        {/* GitHub */}
                        <div className="hidden md:block">
                            <p className="text-gray-400 text-sm mb-2">GitHub:</p>
                            <a href="https://github.com/karthik1841" target="_blank" rel="noopener noreferrer" className="text-xl tracking-wide hover:text-gray-300 transition-colors">
                                github.com/karthik1841
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="hidden md:block">
                            <p className="text-gray-400 text-sm mb-2">LinkedIn:</p>
                            <a href="https://linkedin.com/in/karthik-p-668928255" target="_blank" rel="noopener noreferrer" className="text-xl tracking-wide hover:text-gray-300 transition-colors">
                                linkedin.com/in/karthik-p-668928255
                            </a>
                        </div>

                        {/* Connect with me */}
                        <div className="mt-4 flex flex-col items-center md:items-start">
                            <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <a href="https://github.com/karthik1841" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/in/karthik-p-668928255" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                        <rect width="4" height="12" x="2" y="9"/>
                                        <circle cx="4" cy="4" r="2"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Info Card */}
                <div className="w-full lg:w-7/12 flex flex-col lg:pt-4">
                    <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Let's Connect</h3>
                        <p className="text-gray-300 text-base mb-8 leading-relaxed">
                            I'm currently open to opportunities in AI Engineering and Full Stack Development. Feel free to reach out through GitHub or LinkedIn.
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="https://github.com/karthik1841" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium">GitHub</p>
                                    <p className="text-gray-400 text-sm">github.com/karthik1841</p>
                                </div>
                            </a>

                            <a href="https://linkedin.com/in/karthik-p-668928255" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                        <rect width="4" height="12" x="2" y="9"/>
                                        <circle cx="4" cy="4" r="2"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium">LinkedIn</p>
                                    <p className="text-gray-400 text-sm">linkedin.com/in/karthik-p-668928255</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-gray-400 text-sm mb-4">Certifications</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Google Data Analytics</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">C++ DSA</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">SQL</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Python</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactSection;