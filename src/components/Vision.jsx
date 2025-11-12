import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Vision = () => {
  const quote =
    "To ignite a new era of sovereign AI where the power of the world’s datacenters fits in the palm of our hands. To enable the backbone of the next technological revolution that transforms how nations, enterprises, and innovators harness AI - unleashing superintelligence that is private, affordable, sustainable and in service of humanity, not monopolies.";

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0C0D0D]"
    >
      {/* Parallax background image with vignette */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="Abstract neural network background"
          src="/vision_bg.jpeg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0D] via-transparent to-[#0C0D0D]" />
      </motion.div>

      {/* Foreground content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mb-4">
            Our Vision
          </p>
          <div className="relative">
            <span className="absolute -top-8 -left-8 text-7xl md:text-9xl font-serif text-blue/10 opacity-50 select-none">
              “
            </span>
            <blockquote className="text-2xl md:text-4xl font-medium text-white leading-relaxed">
              {quote}
            </blockquote>
            <span className="absolute -bottom-12 -right-8 text-7xl md:text-9xl font-serif text-blue/10 opacity-50 select-none">
              ”
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
