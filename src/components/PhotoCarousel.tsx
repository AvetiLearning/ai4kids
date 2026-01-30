import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images
import govtGirlsImg from '../assets/images/Govt Girls High School Jharsuguda.jpg';
import ekalSchoolImg from '../assets/images/Ekal school in Mayurbhanj.jpg';
import districtLibImg from '../assets/images/District Public Library, Jharsuguda.jpg';
import lnCollegeImg from '../assets/images/LN College, Jharsuguda.jpg';
import lnCollegeLibImg from '../assets/images/LN College, +2 Library.jpg';
import womensCollegeImg from '../assets/images/Women’s college, Jharsuguda.jpg';
import townHighImg from '../assets/images/Town High School, Jharsuguda.jpg';
import govtUpSchoolImg from '../assets/images/Govt. Uper Primary School.jpg';

const PhotoCarousel = () => {
    // School/College visits data
    const slides = [
        {
            id: 1,
            title: "Govt. Upper Primary School",
            description: "Jharsuguda",
            image: govtUpSchoolImg
        },

        {
            id: 2,
            title: "Ekal School",
            description: "Mayurbhanj",
            image: ekalSchoolImg
        },
        {
            id: 3,
            title: "District Public Library",
            description: "Jharsuguda",
            image: districtLibImg
        },
        {
            id: 4,
            title: "LN College",
            description: "Jharsuguda",
            image: lnCollegeImg
        },
        {
            id: 5,
            title: "LN College (+2 Library)",
            description: "Jharsuguda",
            image: lnCollegeLibImg
        },
        {
            id: 6,
            title: "Women’s College",
            description: "Jharsuguda",
            image: womensCollegeImg
        },
        {
            id: 7,
            title: "Town High School",
            description: "Jharsuguda",
            image: townHighImg
        },

        {
            id: 8,
            title: "Govt Girls High School",
            description: "Jharsuguda",
            image: govtGirlsImg
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        let newIndex = currentIndex + newDirection;
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;

        setDirection(newDirection);
        setCurrentIndex(newIndex);
    };

    const title = (
        <>
            Donated <span style={{ color: 'var(--color-primary)' }}> 750 Free Copies</span> to Schools Across Odisha
        </>
    );

    return (
        <section className="section" style={{ background: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{title}</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        An initiative to empower students and strengthen school education.
                    </p>
                </div>

                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '600px',
                    overflow: 'hidden',
                    background: '#333',
                    color: 'white'
                }}>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(_, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                top: 0,
                                left: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}
                        >
                            {/* Background Image */}
                            <img
                                src={slides[currentIndex].image}
                                alt={slides[currentIndex].title}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                                draggable="false"
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '60%',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
                                zIndex: 1
                            }} />

                            {/* Content Overlay */}
                            <div style={{
                                position: 'relative',
                                zIndex: 2,
                                textAlign: 'center',
                                maxWidth: '90%',
                                padding: '20px',
                                paddingBottom: '80px',
                                textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                            }}>
                                <h2 style={{
                                    fontSize: '4rem',
                                    fontWeight: 'normal',
                                    marginBottom: '16px',
                                    color: 'white',
                                    lineHeight: 1.1
                                }}>
                                    {slides[currentIndex].title}
                                </h2>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f0f0f0' }}>
                                        {slides[currentIndex].description}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '20px',
                            transform: 'translateY(-50%)',
                            background: 'transparent',
                            border: 'none',
                            color: 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            zIndex: 10,
                            padding: '10px'
                        }}
                        onClick={() => paginate(-1)}
                    >
                        <ChevronLeft size={48} />
                    </button>
                    <button
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '20px',
                            transform: 'translateY(-50%)',
                            background: 'transparent',
                            border: 'none',
                            color: 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            zIndex: 10,
                            padding: '10px'
                        }}
                        onClick={() => paginate(1)}
                    >
                        <ChevronRight size={48} />
                    </button>

                    {/* Indicators */}
                    <div style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '10px',
                        zIndex: 10
                    }}>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                style={{
                                    width: '40px',
                                    height: '4px',
                                    background: index === currentIndex ? 'white' : 'rgba(255,255,255,0.4)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                    transition: 'background 0.3s'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoCarousel;
