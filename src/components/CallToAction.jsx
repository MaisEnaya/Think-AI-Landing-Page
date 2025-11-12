import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './button.jsx';
import { useNavigate } from 'react-router-dom';

/**
 * Base CTA. You generally won’t import this directly — import one of the two
 * preconfigured variants below so only the H2 text differs between them.
 */
const CTA = ({
                 title = 'Ready to Own Your AI?',
                 // Keeping subtitle and button text identical for both variants per request
                 subtitle = 'Join the Sovereign AI Revolution. Connect with us to learn how Think AI can empower you.',
                 buttonLabel = 'Join the Sovereign AI Revolution',
                 to = '/contact',
                 className = 'py-24 bg-grey text-white',
             }) => {
    const navigate = useNavigate();
    const handleCTAClick = () => navigate(to);

    return (
        <section className={className}>
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
                    <p className="text-base md:text-lg text-gray-400 mb-10">{subtitle}</p>
                    <Button
                        onClick={handleCTAClick}
                        className="bg-blue-bright text-white hover:bg-blue-bright/90 group rounded-full px-8 py-7 text-lg"
                    >
                        <span className="hidden md:inline">{buttonLabel}</span>
                        <span className="inline md:hidden">Count me in!</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

// Variant A: only the H2 title differs
export const CTAOpening = (props) => (
    <CTA title="Develop and deploy AI locally with full security, privacy, and control, anywhere." {...props} />
);

// Variant B: only the H2 title differs
export const CTAClosing = (props) => (
    <CTA title="Ready to Own Your AI?" {...props} />
);

export default CTA;