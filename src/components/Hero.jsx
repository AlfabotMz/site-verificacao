import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            color: 'white',
            paddingTop: '80px' // For fixed header
        }}>
            {/* Abstract Shapes */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(217,119,6,0.2) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="grid grid-2" style={{ alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{
                            color: 'var(--accent)',
                            fontWeight: '600',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                            display: 'block'
                        }}>
                            Sociedade por Quotas
                        </span>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            color: 'white',
                            marginBottom: '1.5rem',
                            lineHeight: 1.1
                        }}>
                            EDN <br />
                            <span style={{ color: 'var(--accent)' }}>VISION</span>, LDA
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#cbd5e1',
                            marginBottom: '2.5rem',
                            maxWidth: '600px'
                        }}>
                            Soluções modernas em tecnologia, indústria e gestão empresarial. Especialistas em fornecimento de material, software e serviços industriais.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#serviços" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Nossos Serviços <ArrowRight size={20} />
                            </a>
                            <a href="#contato" className="btn" style={{
                                border: '1px solid white',
                                color: 'white'
                            }}>
                                Fale Conosco
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ display: 'none' }} // Hidden on mobile, shown via CSS
                        className="hero-image"
                    >
                        {/* Abstract visual representation */}
                        <div style={{
                            width: '100%',
                            height: '400px',
                            background: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.1)' }}>T-MESHU</div>
                                <div style={{ color: 'var(--accent)', marginTop: '1rem' }}>Excelência e Confiança</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (min-width: 768px) {
          .hero-image { display: block !important; }
        }
      `}</style>
        </section>
    );
}
