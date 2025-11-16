import React from 'react';

const ContactHero = () => {
  const subject = 'Think AI inquiry';
  const body =
    'Hello Think AI Team,\n\nI am interested in joining the Sovereign AI Revolution.\n\n Find my details below, \n\n[FULL NAME] \n\n[PHONE NUMBER] \n\n[POSITION] \n\n[COMPANY] \n\n[LOCATION] \n\nPlease contact me regarding Think AI! \n\nRegards, ';
  const mailtoLink = `mailto:info@think-ai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact-top" className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-black text-white scroll-mt-24 md:scroll-mt-28">
      <div className="pt-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* H1 styled like CTA heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Sovereign AI Revolution
          </h1>

          {/* Supporting line styled like Vision caption/body */}
          <p className="p-16 text-base md:text-lg text-gray-400">
              With a simple email to <br></br>{' '}
            <a
              href={mailtoLink}
              className="font-semibold text-white hover:text-blue underline-offset-4 hover:underline"
            >
              info@think-ai.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
