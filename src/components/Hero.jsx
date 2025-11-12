import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    // Use the local asset you already have in /public, or keep the CDN URL
    // const thinkGlowLogoUrl = 'https://horizons-cdn.hostinger.com/1eb91dc1-250a-47e7-886e-429ff43483e0/b72dc1ce59dabc0af186eb9e947c80a8.png';
    const thinkGlowLogoUrl = '/think-logo-glow.png';

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background + subtle entrance */}
            <motion.div
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute inset-0"
                aria-hidden="true"
            >
                {/* Top/bottom vignette to lift the center content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50" />
            </motion.div>

            {/* Foreground content */}
            <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="flex flex-col items-center"
                >
                    <img
                        src={thinkGlowLogoUrl}
                        alt="Think AI glowing logo"
                        className="w-full max-w-lg md:max-w-2xl -mb-12 md:-mb-20"
                        draggable={false}
                    />

                    <h1 className="text-center font-light text-grey text-2xl md:text-4xl max-w-4xl">
                        World’s first Unified AI Compute Ecosystem for <br className="hidden md:block" />
                        Sovereign Intelligence
                    </h1>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;