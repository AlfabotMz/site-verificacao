"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contato" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>OiChat</h3>
                        <p style={{ color: '#94a3b8', maxWidth: '400px' }}>
                            Plataforma de comunicação e automação para gerenciar conversas nas redes sociais. Fornecido por EDN VISION.
                        </p>
                    </div>
                    <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Legal</h4>
                        <Link href="/privacy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Política de Privacidade</Link>
                        <Link href="/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>Termos de Serviço</Link>
                        <Link href="/platform-data" style={{ color: '#94a3b8', textDecoration: 'none' }}>Uso de Dados da Plataforma</Link>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    color: '#64748b'
                }}>
                    <p style={{ marginBottom: '0.5rem' }}>
                        © {currentYear} EDN VISION, LDA — Entidade Legal nº 105055676 — Tete, Moçambique.
                    </p>
                    <p>
                        OiChat — Comunicação Inteligente para o seu Negócio.
                    </p>
                </div>
            </div>
        </footer>
    );
}
