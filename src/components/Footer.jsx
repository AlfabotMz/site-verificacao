import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contato" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>T-MESHU</h3>
                        <p style={{ color: '#94a3b8', maxWidth: '400px' }}>
                            Soluções profissionais em consultoria e serviços para impulsionar o seu negócio em Moçambique.
                        </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contato</h4>
                        <p style={{ color: '#94a3b8' }}>Maputo, Moçambique</p>
                        <p style={{ color: '#94a3b8' }}>Rua do Jardim nº 793</p>
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
                        © {currentYear} T-Meshu Consultoria e Serviços, Sociedade Unipessoal, Lda — Entidade Legal nº 10021607 — Maputo, Moçambique.
                    </p>
                </div>
            </div>
        </footer>
    );
}
