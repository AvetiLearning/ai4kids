import { useState, useEffect } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import authorImg from '../assets/images/author.png';

const Hero = () => {
  const [content, setContent] = useState({
    text: "Donated more than 750 free copies to schools across Odisha",
    image: authorImg
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('http://localhost:8000/content/hero_donation');
        if (response.ok) {
          const data = await response.json();
          if (data.text_content || data.image_url) {
            setContent({
              text: data.text_content || content.text,
              image: data.image_url ? `http://localhost:8000${data.image_url}` : content.image
            });
          }
        }
      } catch (error) {
        console.error("Failed to fetch hero content", error);
      }
    };
    fetchContent();
  }, []);

  return (
    <section className="hero-section" style={{
      background: 'linear-gradient(135deg, var(--color-background) 0%, var(--color-background-alt) 100%)',
      padding: '120px 0 80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'rgba(224, 122, 95, 0.05)',
        borderRadius: '50%',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'rgba(129, 178, 154, 0.1)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <style>{`
          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr;
              gap: 40px;
              text-align: center;
            }
            .hero-grid h1 {
              font-size: 2.5rem !important;
            }
            .hero-grid p {
              margin-left: auto;
              margin-right: auto;
            }
            .hero-grid .btn-container {
               justify-content: center;
            }
          }
        `}</style>
        <div className="hero-grid">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'white',
              padding: '8px 16px',
              borderRadius: '50px',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '24px',
              color: 'var(--color-primary)',
              fontWeight: '700',
              fontSize: '0.9rem'
            }}>
              <Sparkles size={16} fill="currentColor" />
              <span>India's First AI Series for Kids</span>
            </div>

            <h1 style={{
              fontSize: '3.5rem',
              marginBottom: '24px',
              color: 'var(--color-secondary)'
            }}>
              Prepare Your Child for the <span style={{ color: 'var(--color-primary)' }}>Future of AI</span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'var(--color-text-light)',
              marginBottom: '40px',
              maxWidth: '540px'
            }}>
              AI through simple Indian stories—building thinking, ethics, and creativity.
            </p>

            <div className="btn-container" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => document.getElementById('author-video')?.scrollIntoView({ behavior: 'smooth' })}>
                <Play size={20} style={{ marginRight: '8px' }} />
                Watch Author's Message
              </button>

            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
              transform: 'rotate(-2deg)'
            }}>
              {/* Placeholder for Book/Author Image using a generated style div for now */}
              <div style={{
                width: '100%',
                height: '400px',
                backgroundColor: '#f0f0f0',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#aaa',
                flexDirection: 'column',
                overflow: 'hidden'
              }}>
                <img
                  src={content.image}
                  alt="Kids learning AI"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                marginTop: '20px',
                textAlign: 'center',
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-secondary)',
                fontWeight: 'bold'
              }}>
                {/* Check if content.text contains HTML tags or render strictly as text. 
                     The original had <strong> tags. 
                     For simplicity with dynamic text input (usually plain text), I will render as string.
                     If user wants formatting, they might need a rich text editor or basic HTML parsing.
                     I'll stick to bolding the whole thing or just text.
                     Wait, original: Donated <strong>more than 750 free</strong> copies...
                     The user asked for "give two option one for image and one for text".
                     I'll just render the text as is.
                  */}
                <span dangerouslySetInnerHTML={{ __html: content.text }} />
              </div>
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
