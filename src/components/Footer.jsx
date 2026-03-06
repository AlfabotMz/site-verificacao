import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contato" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>EDN VISION</h3>
                        <p style={{ color: '#94a3b8', maxWidth: '400px' }}>
                            Soluções tecnológicas, industriais e empresariais modernas para impulsionar o seu negócio em Moçambique.
                        </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Sede</h4>
                        <p style={{ color: '#94a3b8' }}>Chingodzi, Tete</p>
                        <p style={{ color: '#94a3b8' }}>Moçambique</p>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    color: '#64748b'
                }}>
                    <p>
                        © {currentYear} EDN VISION, LDA — Entidade Legal nº 105055676 — Tete, Moçambique.
                    </p>
                </div>
            </div>
        </footer>
    );
}
