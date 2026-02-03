import { motion } from 'framer-motion';

const AuthorVideo = () => {
    return (
        <section id="author-video" className="section" style={{ background: 'var(--color-background)' }}>
            <div className="container">
                <style>{`
                  .author-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 60px;
                    align-items: center;
                  }
                  @media (max-width: 768px) {
                    .author-grid {
                      grid-template-columns: 1fr;
                      gap: 40px;
                      text-align: center;
                    }
                  }
                `}</style>
                <div className="author-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
                            A Message to <span style={{ color: 'var(--color-primary)' }}>Parents & Educators</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '24px' }}>
                            "We believe that AI isn't just about computers—it's about teaching children how to think, question, and create responsibly in a digital world."
                        </p>
                        <div style={{
                            borderLeft: '4px solid var(--color-accent)',
                            paddingLeft: '20px',
                            fontStyle: 'italic',
                            color: 'var(--color-secondary)'
                        }}>
                            <p style={{ fontWeight: 'bold' }}>Mr. Debu Panda & Mr. Prasant Behera</p>
                            <p style={{ fontSize: '0.9rem' }}>Authors, AI for Kids Series</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            background: 'white',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)',
                            aspectRatio: '16/9',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}>
                            <iframe
                                width="100%"
                                height="100%"
                                //src="https://www.youtube-nocookie.com/embed/n3vkkxfd3XA?autoplay=0&rel=0&modestbranding=1"
                                src="https://www.youtube-nocookie.com/embed/4vwA-mqdnMQ?autoplay=0&rel=0&modestbranding=1
"
                                title="Author Introduction"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%'
                                }}
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default AuthorVideo;
