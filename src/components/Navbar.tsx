import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const offset = 80; // Adjust for fixed navbar height
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Videos', id: 'videos' },
        { name: 'Outcomes', id: 'outcomes' },
        { name: 'Testimonials', id: 'testimonials' },
        { name: 'Impact', id: 'impact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="navbar"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: 'linear-gradient(90deg, #84BC54 0%, #6CA341 100%)',
                    boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
                    padding: isScrolled ? '12px 0' : '20px 0',
                    transition: 'padding 0.3s ease'
                }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('home')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            fontFamily: 'var(--font-heading)'
                        }}
                    >
                        <Sparkles size={24} />
                        <span>AI for Kids</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    {/* Desktop Menu */}
                    <div className="desktop-menu">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.name}
                                whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(link.id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1rem',
                                    color: 'white',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    padding: '0'
                                }}
                            >
                                {link.name}
                            </motion.button>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open('https://www.amazon.in/AI-Kids-Prasanta-Behera/dp/1645606953', '_blank')}
                            className="btn btn-primary"
                            style={{ padding: '8px 20px', fontSize: '0.9rem' }}
                        >
                            Buy Now
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            position: 'fixed',
                            top: '60px', // Adjust based on navbar height
                            left: 0,
                            right: 0,
                            background: 'white',
                            zIndex: 999,
                            borderBottom: '1px solid #eee',
                            boxShadow: 'var(--shadow-md)',
                            overflow: 'hidden'
                        }}
                    >
                        <div className="container" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '1.1rem',
                                        color: 'var(--color-secondary)',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        padding: '8px 0'
                                    }}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => window.open('https://www.amazon.in/AI-Kids-Prasanta-Behera/dp/1645606953', '_blank')}
                                className="btn btn-primary"
                                style={{ width: '100%', marginTop: '8px' }}
                            >
                                Buy Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
