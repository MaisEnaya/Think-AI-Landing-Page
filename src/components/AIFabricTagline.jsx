import React from 'react';

const centerLogoUrl = '/fabric_logo_glow.png';

const AiFabricTagline = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
        {/* 3-column layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 justify-center lg:grid-cols-3 items-center">
          {/* Left tagline */}
          <h2 className="text-white/90 font-light tracking-tight text-3xl 2xl:text-5xl leading-tight text-center lg:text-right">
            World’s first Unified AI<br></br> Compute Ecosystem
          </h2>

          {/* Center logo with radial glow */}
          <div className="relative flex justify-center">
            <img
              src={centerLogoUrl}
              alt="AI Fabric logo"
              className="relative w-128 select-none"
              draggable={false}
            />
          </div>

          {/* Right tagline */}
          <div className="text-white font-light tracking-tight leading-tight text-center lg:text-left">
            <div className="text-3xl 2xl:text-5xl mb-2">
                <span> For True</span></div>
            <div className="text-3xl 2xl:text-5xl">
              <span className="inline-block bg-blue-muted bg-opacity-90 text-white">
                Sovereign Intelligence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AiFabricTagline;
