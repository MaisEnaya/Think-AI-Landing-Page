import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './button.jsx';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10);
        onScroll(); // initialize state on mount
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleCTA = () => navigate('/contact');

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${isScrolled ? 'bg-[#0C0D0D]/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" aria-label="Home">
                    <img
                        src="/think-logo-white-glow.png"
                        alt="Think AI Logo"
                        className="h-9 md:h-10 w-auto"
                    />
                </Link>

                <Button
                    onClick={handleCTA}
                    className="group rounded-full bg-blue-bright text-white hover:bg-blue-bright/90 px-5 py-2.5 md:px-6 md:py-3 text-sm"
                >
                    <span className="inline md:hidden">Count me in!</span>
                    <span className="hidden md:inline whitespace-nowrap">Join the Sovereign AI Revolution</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </div>
        </motion.header>
    );
};

export default Header;