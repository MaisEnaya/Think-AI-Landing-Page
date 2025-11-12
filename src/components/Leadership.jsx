import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const leadershipData = [
  {
    role: 'Founder',
    name: 'Ahmed AlSharif',
    email: 'ahmed@think-ai.com',
    imageUrl:
      'https://horizons-cdn.hostinger.com/1eb91dc1-250a-47e7-886e-429ff43483e0/0a2df113d6bc02856579f5ae92d68e76.png',
    background: [
      { title: 'Chief Technology Officer', company: 'Sandsoft' },
      { title: 'Head of Reality Labs Platform Engineering', company: 'Meta Inc.' },
      { title: 'Technical Director', company: 'Electronic Arts Inc.' },
    ],
    linkedinUrl: 'https://www.linkedin.com/in/ahmed-a-sharif/',
  },
  {
    role: 'Chief Operating Officer',
    name: 'Ammar Enaya',
    email: 'ammar.enaya@think-ai.com',
    imageUrl:
      'https://horizons-cdn.hostinger.com/1eb91dc1-250a-47e7-886e-429ff43483e0/fdca8e66f3d1bcf89d5ee3c22f9fb287.png',
    background: [
      { title: 'Chief Executive Officer', company: 'Ajlan Tech' },
      { title: 'Regional Director, Middle East and Turkey', company: 'Vectra AI' },
      { title: 'Regional Director for MENA', company: 'Hewlett Packard Enterprise' },
    ],
    linkedinUrl: 'https://www.linkedin.com/in/ammarenaya/',
  },
];

const LeadershipCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-[#1A1B2D]/50 rounded-3xl p-8 backdrop-blur-sm shadow-lg lg:aspect-square lg:min-h-[420px] xl:min-h-[480px]"
  >
    <div className="flex flex-col md:flex-row gap-8 items-stretch min-h-full">
      {/* Left: identity + photo */}
      <div className="flex-shrink-0 flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-400 uppercase tracking-widest">{member.role}</p>
          <p className="text-2xl font-bold text-white mt-1">{member.name}</p>
          <a
            href={`mailto:${member.email}`}
            className="text-blue/80 hover:text-blue transition-colors"
          >
            {member.email}
          </a>
        </div>
        <img
          src={member.imageUrl}
          alt={member.name}
          className="rounded-2xl mt-4 w-full md:w-48 object-cover"
          draggable={false}
        />
      </div>

      {/* Right: background + LinkedIn */}
      <div className="flex-grow">
        <div className="relative bg-black/30 rounded-2xl p-6 h-full">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Background</p>
          <ul className="space-y-3">
            {member.background.map((item, i) => (
              <li key={i}>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.company}</p>
              </li>
            ))}
          </ul>
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="static sm:absolute bottom-6 right-6 flex items-center text-blue hover:text-white font-semibold group transition-colors mt-8"
            aria-label={`Open ${member.name}'s LinkedIn profile`}
          >
            LinkedIn
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

function Leadership() {
  return (
    <section className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest text-center mb-3">Leadership</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
            Built by Innovators, Driven by Sovereignty
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {leadershipData.map((member, index) => (
            <LeadershipCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
