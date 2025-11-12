import React from 'react';

const Footer = () => {
  const subject = 'Think AI inquiry';
  const body =
    'Hello Think AI Team, \n\nI am interested in joining the Sovereign AI Revolution. \n\n Find my details below, \n\n[FULL NAME] \n\n[PHONE NUMBER] \n\n[POSITION] \n\n[COMPANY] \n\n[LOCATION] \n\nPlease contact me regarding Think AI! \n\nRegards, ';
  const mailtoLink = `mailto:info@think-ai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const thinkAILogoUrl = '/think-logo.png';

  return (
    <footer className="bg-[#0C0D0D] border-t border-white/10 pt-16 pb-8 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={thinkAILogoUrl} alt="Think AI Logo" className="h-12 w-auto object-contain mb-3 select-none" draggable={false} />
            <p className="text-gray-400">The Sovereign AI Revolution.</p>
          </div>

          {/* Contact */}
          <div className="mt-2 md:mt-0">
            <p className="font-semibold text-white mb-2">Connect With Us</p>
            <a
              href={mailtoLink}
              className="text-gray-400 hover:text-blue transition-colors duration-300 inline-block"
            >
              info@think-ai.com
            </a>
          </div>
        </div>


      </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Think AI. All Rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
