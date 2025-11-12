import React from 'react';

const Connect = () => {
  const thinkLogo = '/think-logo-glow.png';

  return (
    <section className="relative py-24  text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <p className="text-white/70 font-light tracking-tight text-2xl md:text-4xl lg:text-5xl">
            Connect with us to learn how
          </p>

          <div className="relative my-6">
            <div
              className="pointer-events-none absolute -inset-6 md:-inset-8 rounded-full opacity-40"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(30,58,138,0.18) 0%, rgba(59,130,246,0.45) 35%, rgba(0,0,0,0) 65%)',
                filter: 'blur(6px)'
              }}
            />
            <img
              src={thinkLogo}
              alt="Think AI glowing logo"
              className="relative w-[120px] md:w-[160px] lg:w-[180px] select-none -my-8"
              draggable={false}
            />
          </div>

          <p className="text-white font-light tracking-tight text-2xl md:text-4xl lg:text-5xl">
            can empower you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;
