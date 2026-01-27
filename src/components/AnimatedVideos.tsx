import { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedVideos = () => {
    const videos = Array.from({ length: 11 }).map((_, i) => ({
        id: i + 1,
        title: `${["Ep. 1: From Harry Potter to Artificial Intelligence", "Ep. 2: How Big is Your Brain?", "Ep. 3: What Is Intelligence?", "Ep. 4: How Do Computers Think? Part - 1", "Ep. 4: How Do Computers Think? Part - 2", "Ep. 5: What Is Artificial Intelligence (AI)? Part - 1", "Ep. 5: What Is Artificial Intelligence (AI)? Part - 2", "Ep. 6: Where Is AI Used in Real Life?", "Ep. 7: Let’s Build an AI App!", "Ep. 8: Can AI Write Stories & Paint Pictures?", "Ep. 9: Alina’s Final AI Mission!"][i]}`,
        desc: 'Watch the animated lesson corresponding to this chapter.',
        youtubeId: [
            'f8LKu0lmN5M', // Ep 1
            'dDlq8_GEOWQ', // Ep 2
            'tgNUV4-o8wQ', // Ep 3
            'Mi5BKKMiZl8', // Ep 4.1
            'vyYz7U_xPXM', // Ep 4.2
            'A_b7rgR3mPo', // Ep 5.1
            '1rHL8xRxi7Y', // Ep 5.2
            'sF9Hi3nB2mY', // Ep 6
            'gg6PChnvQcU', // Ep 7
            'DjnpT68nyDo', // Ep 8
            'fA8n43y7ntY'  // Ep 9
        ][i] || null
    }));

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [selectedVideo, setSelectedVideo] = useState<{ id: number; title: string; desc: string; youtubeId: string | null } | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsPerPage(3);
            else if (window.innerWidth >= 640) setItemsPerPage(2);
            else setItemsPerPage(1);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const canGoNext = currentIndex + itemsPerPage < videos.length;
    const canGoPrev = currentIndex > 0;

    const handleNext = () => {
        if (canGoNext) setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (canGoPrev) setCurrentIndex(prev => prev - 1);
    };

    return (
        <section className="section" style={{ background: '#FFFDF5' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                        Learning Through <span style={{ color: 'var(--color-primary)' }}>Animated Stories</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        Each chapter comes with a fun animated video to reinforce learning.
                    </p>
                </div>

                <div style={{ position: 'relative', padding: '0 20px' }}>

                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        disabled={!canGoPrev}
                        style={{
                            position: 'absolute',
                            left: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: canGoPrev ? 'white' : 'rgba(255,255,255,0.5)',
                            border: '1px solid #eee',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'var(--shadow-md)',
                            cursor: canGoPrev ? 'pointer' : 'not-allowed',
                            color: canGoPrev ? 'var(--color-primary)' : '#ccc'
                        }}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        disabled={!canGoNext}
                        style={{
                            position: 'absolute',
                            right: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: canGoNext ? 'white' : 'rgba(255,255,255,0.5)',
                            border: '1px solid #eee',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'var(--shadow-md)',
                            cursor: canGoNext ? 'pointer' : 'not-allowed',
                            color: canGoNext ? 'var(--color-primary)' : '#ccc'
                        }}
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Carousel Window */}
                    <div style={{ overflow: 'hidden', margin: '0 -12px' }}>
                        <motion.div
                            style={{
                                display: 'flex',
                                width: '100%'
                            }}
                            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            {videos.map(video => (
                                <div
                                    key={video.id}
                                    style={{
                                        minWidth: `${100 / itemsPerPage}%`,
                                        padding: '0 12px'
                                    }}
                                >
                                    <div
                                        className="card"
                                        style={{ padding: '0', overflow: 'hidden', height: '100%', background: 'white', cursor: 'pointer' }}
                                        onClick={() => video.youtubeId && setSelectedVideo(video)}
                                    >
                                        <div style={{
                                            position: 'relative',
                                            paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                                            height: 0,
                                            background: '#f0f0f0'
                                        }}>
                                            <img
                                                src={video.youtubeId
                                                    ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
                                                    : `https://placehold.co/400x250/orange/white?text=Video+${video.id}`
                                                }
                                                alt={video.title}
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'rgba(0,0,0,0.2)', // Slight overlay
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'background 0.3s'
                                            }}>
                                                <Play size={48} fill="white" color="white" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} />
                                            </div>
                                        </div>
                                        <div style={{ padding: '20px' }}>
                                            <h4 style={{ marginBottom: '8px', fontSize: '1.1rem', minHeight: '54px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{video.title}</h4>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>{video.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.8)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px'
                        }}
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                            style={{
                                width: '100%',
                                maxWidth: '900px',
                                background: 'transparent',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                style={{
                                    position: 'absolute',
                                    top: '-40px',
                                    right: '0',
                                    background: 'none',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                <X size={32} />
                            </button>
                            <div style={{
                                position: 'relative',
                                paddingBottom: '56.25%',
                                height: 0,
                                background: 'black',
                                borderRadius: '12px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                            }}>
                                <iframe
                                    src={selectedVideo.youtubeId ? `https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1` : ''}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '12px'
                                    }}
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default AnimatedVideos;
