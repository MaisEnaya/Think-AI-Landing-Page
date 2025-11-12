import React from 'react';

// Glow logo already exists in /public as think-logo-glow.png
const THINK_GLOW_LOGO = '/think-logo-glow.png';

const features = [
  {
    title: 'Attain true AI Sovereignty',
    description:
      'Develop and deploy AI locally - with full security, privacy, and control, anywhere.',
  },
  {
    title: 'Unlimited Innovation',
    description:
      'Complete in-house freedom to innovate, develop, fine-tune and train AI models for any unique business needs.',
  },
  {
    title: 'Own the AI',
    description:
      'No more recurring OPEX costs. Instead, a CAPEX asset on the balance sheet with ROI < 12 months vs cloud.',
  },
  {
    title: 'Secure by Default',
    description:
      'Data-center grade compute, under your desk. Zero compromises.',
  },
  {
    title: 'Full Sovereignty',
    description:
      'Complete control and data sovereignty. Local, private, and secure. No cloud or foreign dependency.',
  },
  {
    title: 'Energy Efficiency',
    description:
      'Significantly lower energy consumption than traditional datacenter AI compute',
  },
];

const OnlyWithThink = () => {
  return (
    <section className="py-24 bg-[#0C0D0D] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header: caption + glowing logo, both centered */}
        <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16">
          <div className="text-white/70 font-light tracking-[0.25em] text-xs md:text-sm uppercase">ONLY WITH</div>
          <div className="relative flex justify-center mt-4 md:mt-5">
            <div
              className="pb-16 pointer-events-none absolute -inset-8 md:-inset-10 rounded-full opacity-30"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(30,58,138,0.15) 0%, rgba(59,130,246,0.40) 35%, rgba(0,0,0,0) 65%)',
                filter: 'blur(6px)',
              }}
            />
            <img
              src={THINK_GLOW_LOGO}
              alt="Think AI glow logo"
              className="relative w-[120px] md:w-[140px] select-none -mt-10 "
              draggable={false}
            />
          </div>
        </div>

        {/* Features table */}
        <div className="max-w-5xl mx-auto py-12">
          {features.map((feature, index) => (
            <div key={index} className={`border-t border-white/10 ${index === features.length - 1 ? 'border-b' : ''} border-white/10`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 py-8 md:py-10">
                <div className="md:col-span-1 text-center md:text-left">
                  <h3 className="text-base md:text-lg font-medium text-white/95 leading-snug">
                    {feature.title}
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm md:text-base text-gray-400 max-w-2xl">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OnlyWithThink;
