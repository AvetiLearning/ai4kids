import { Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-secondary)', color: 'white', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    marginBottom: '60px'
                }}>

                    {/* Brand & Author Bio */}
                    <div style={{ maxWidth: '300px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#F2CC8F' }}>AI for Kids</h3>
                        <p style={{ opacity: 0.8, marginBottom: '24px' }}>
                            Empowering the next generation of Indian thinkers with knowledge, ethics, and logic through the magic of storytelling.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Facebook size={20} style={{ cursor: 'pointer', opacity: 0.8 }} />
                            <Twitter size={20} style={{ cursor: 'pointer', opacity: 0.8 }} />
                            <Instagram size={20} style={{ cursor: 'pointer', opacity: 0.8 }} />
                            <Linkedin size={20} style={{ cursor: 'pointer', opacity: 0.8 }} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Explore</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Home', 'About the Book', 'Watch Videos', 'For Schools', 'Contact'].map(link => (
                                <li key={link} style={{ marginBottom: '12px' }}>
                                    <a href="#" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {/* <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', opacity: 0.8 }}>
                                <Mail size={18} style={{ marginRight: '10px' }} />
                                hello@aiforkids.in
                            </li> */}
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', opacity: 0.8 }}>
                                <Phone size={18} style={{ marginRight: '10px' }} />
                                +91 7894040614
                            </li>
                            <li style={{ display: 'flex', alignItems: 'start', opacity: 0.8 }}>
                                <MapPin size={18} style={{ marginRight: '10px', marginTop: '4px' }} />
                                <span>
                                    M74, Baramunda Housing Board Colony,<br />
                                    Baramunda, Bhubaneswar, Odisha 751003
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '30px',
                    textAlign: 'center',
                    opacity: 0.6,
                    fontSize: '0.9rem'
                }}>
                    &copy; {new Date().getFullYear()} AI for Kids Series. All rights reserved. This platform is built by Aveti Learning.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
