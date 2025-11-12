import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  MemoryStick,
  Droplets,
  Workflow,
  LayoutGrid,
  SlidersHorizontal,
  Share2,
  Expand,
  GitMerge,
} from 'lucide-react';

const ProductsDetails = () => {
  const thinkAILogoUrl = '/think-logo.png';

  const products = [
    {
      name: 'AI SuperNode',
      image: '/supernode.png',
      imageAlt: 'Think AI Supernode Hardware',
      features: [
        { icon: <Cpu className="w-6 h-6 text-blue" />, text: 'Up to 8 Petaflops of portable FP8 compute' },
        { icon: <MemoryStick className="w-6 h-6 text-blue" />, text: 'Up to 1 TB of VRAM at 4.8 TB/s throughput' },
        { icon: <Droplets className="w-6 h-6 text-blue" />, text: '6000W liquid cooling system' },
      ],
      order: 'normal',
    },
    {
      name: 'ILM system',
      image: '/ilm.mp4',
      imageAlt: 'Screenshot of Think Intelligent Learning Management System',
      features: [
        {
          icon: <Workflow className="w-6 h-6 text-blue" />,
          text:
            'Inference Orchestrator—dynamically manages inference workloads for maximum throughput and minimal latency.',
        },
        { icon: <LayoutGrid className="w-6 h-6 text-blue" />, text: 'Topology Aware Resource Allocation—maintain smooth token flow and meet latency SLOs.' },
        {
          icon: <SlidersHorizontal className="w-6 h-6 text-blue" />,
          text:
            'Adaptive Fine-Tuning Engine—for quantized state hand-off on a single sovereign system with LoRA, QLORA, GRPO and Dr. GRPO RL.',
        },
      ],
      order: 'reversed',
    },
    {
      name: 'Constellation',
      image: '/constellation.png',
      imageAlt: 'Abstract representation of Constellation network',
      features: [
        { icon: <Expand className="w-6 h-6 text-blue" />, text: 'Enables on-demand scaling for training, fine-tuning, and high-throughput inference' },
        {
          icon: <GitMerge className="w-6 h-6 text-blue" />,
          text:
            'Multi-AI Node orchestration through ILM System for seamless compute optimization and resource control.',
        },
        { icon: <Share2 className="w-6 h-6 text-blue" />, text: 'Transforms any office into data-centers with supercomputer-levels of AI performance.' },
      ],
      order: 'normal',
    },
  ];

  return (
    <section id="product-details" className="py-24 bg-[#0C0D0D] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 text-gray-400 font-light tracking-widest text-sm uppercase">
            <img src={'/fabric_logo_glow.png'}  alt={'AI Fabric Logo'} className={"w-[106px]"}/>
            <span>AI Fabric Solutions Highlights</span>
          </div>
        </motion.div>

        <div className="space-y-24">
          {products.map((product) => (
            <div key={product.name} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: product.order === 'reversed' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`rounded-2xl overflow-hidden aspect-video ${product.order === 'reversed' ? 'lg:order-last' : ''}`}
              >
                {product.image.endsWith('.mp4') ? (
                  <video
                    src={product.image}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img className="w-full h-full object-cover" alt={product.imageAlt} src={product.image} />
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: product.order === 'reversed' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Logo + title stacked as a single centered/left-aligned unit depending on column */}
                <div className="flex flex-col items-start mb-4">
                  <img src={thinkAILogoUrl} alt="Think AI Logo" className="w-[106px] -mb-2 select-none" />
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-none italic">
                    {product.name}
                  </h2>
                </div>

                <div className="space-y-5">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                      <p className="text-base text-gray-300">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductsDetails;
