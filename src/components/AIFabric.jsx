import React from 'react';
const thinkGlowLogoUrl = '/think-logo-glow.png';

const AiFabric = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Centered stack */}
      <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center justify-center text-center">
        <h3 className="font-light text-white tracking-tight text-5xl p-8 md:text-7xl mb-10 md:mb-14">
          Introducing
        </h3>

        {/* Logo with radial glow*/}
        <div className="relative mb-6 md:mb-8">
             <div
            className="pointer-events-none absolute -inset-12 md:-inset-16 rounded-full opacity-50"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(30,58,138,0.18) 0%, rgba(59,130,246,0.45) 35%, rgba(0,0,0,0) 65%)',
              filter: 'blur(6px)'
            }}
          />
          <img
            src={thinkGlowLogoUrl}
            alt="Think AI glowing logo"
            // className="relative w-[240px] sm:w-[320px] md:w-[440px] lg:w-[520px] select-none"
              className="relative w-[180px] select-none -my-18"
            draggable={false}
          />
        </div>

        <h4 className="text-white/95 font-light italic tracking-tight text-3xl md:text-5xl">
          AI Fabric
        </h4>
      </div>
    </section>
  );
};
export default AiFabric;
