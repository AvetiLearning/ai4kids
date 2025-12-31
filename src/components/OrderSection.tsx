import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import bookCover from '../assets/images/book_cover.png';

const OrderSection = () => {
    const amazonLink = "https://www.amazon.in/AI-Kids-Prasanta-Behera/dp/1645606953";

    return (
        <section id="order-section" className="section" style={{ background: '#FFFDF5' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem' }}>
                    Bring <span style={{ color: 'var(--color-primary)' }}>AI for Kids</span> Home
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {/* Individual Book */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="card"
                        style={{ textAlign: 'center', background: 'white', border: '2px solid transparent' }}
                    >
                        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center', height: '300px' }}>
                            <img
                                src={bookCover}
                                alt="AI for Kids Book Cover"
                                style={{
                                    height: '100%',
                                    width: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: 'var(--shadow-md)',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Single Book</h3>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '24px' }}>
                            Perfect for getting started. Includes the complete story and activity sheets.
                        </p>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '32px', color: 'black' }}>
                            ₹150
                        </div>
                        <button
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                            onClick={() => window.open(amazonLink, '_blank')}
                        >
                            Order Now
                        </button>
                    </motion.div>




                    {/* Bulk Order */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="card"
                        style={{ textAlign: 'center', background: 'white' }}
                    >
                        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                            <Mail size={48} className="text-accent" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>School / Bulk</h3>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '24px' }}>
                            Special discounts for schools, NGOs, and bulk orders of 50+ copies.
                        </p>
                        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '44px', color: 'var(--color-secondary)', paddingTop: '10px' }}>
                            Custom Pricing
                        </div>
                        <button
                            className="btn btn-secondary"
                            style={{ width: '100%' }}
                            onClick={() => window.location.href = '#'}
                        >
                            Contact Us
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OrderSection;
