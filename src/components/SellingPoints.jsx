import React from 'react';
import { motion } from 'framer-motion';

/**
 * points: Array<{ icon: React.ReactNode, title: string, description: string }>
 * showLogo: boolean — keep supported, default false
 * logoUrl: string — unused when showLogo is false
 * className: string — section wrapper classes
 */
const SellingPoints = ({
                           points = [],
                           showLogo = false, // default false as requested
                           logoUrl = '/think-logo.png',
                           className = 'py-24 bg-grey',
                       }) => {
    if (!Array.isArray(points) || points.length === 0) return null;

    return (
        <section className={className}>
            {/* NOTE: Tailwind's `container` is layout-only (not visible). If you want true edge-to-edge, remove it. */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 1, y: 10, filter: 'brightness(0.5)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'brightness(0.5)' }}
                            whileHover={{ filter: 'brightness(1)', scale: 1.05 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-0 transition-all duration-300 flex flex-col items-center"
                        >
                            <div className="flex justify-center items-center mb-6">
                                {/* Keep an icon halo; remove this wrapper if you want absolutely no halo */}
                                <div className="bg-blue/10 p-4 rounded-full border border-blue/20">
                                    {point.icon}
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center mb-2">
                                {showLogo && logoUrl && (
                                    <img src={logoUrl} alt="Think logo" className="h-16 -mb-4 select-none" />
                                )}
                                <h3 className="text-white text-xl md:text-2xl font-light italic tracking-tight">
                                    {point.title}
                                </h3>
                            </div>

                            <p className="text-gray-400 max-w-xs mx-auto">{point.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SellingPoints;