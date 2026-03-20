"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '5rem 0' }}>
            <div className="container">
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: '600', marginBottom: '2rem' }}>
                    <ArrowLeft size={20} />
                    Voltar para a Home
                </Link>

                <div className="glass" style={{ padding: '3rem', borderRadius: '1.5rem', backgroundColor: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: '1rem', color: 'var(--accent)' }}>
                            <FileText size={32} />
                        </div>
                        <h1 style={{ fontSize: '2.5rem' }}>Termos de Serviço</h1>
                    </div>

                    <div className="policy-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
                        <p>Estes Termos regem o uso da plataforma <strong>OiChat</strong>.</p>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Descrição do Serviço</h2>
                            <p>O OiChat fornece às empresas ferramentas para gerenciar e automatizar conversas com seus clientes em plataformas de mensagens, como Facebook e Instagram.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Responsabilidades do Usuário</h2>
                            <p>Os clientes são responsáveis por como utilizam a plataforma e devem cumprir as políticas do Facebook e Instagram (Meta).</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Uso da Plataforma</h2>
                            <p>Os clientes podem usar o OiChat para responder a consultas de clientes, gerenciar conversas e automatizar respostas de forma ética e profissional.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Limitação de Responsabilidade</h2>
                            <p>O OiChat fornece a plataforma como uma ferramenta de comunicação e não é responsável por como as empresas interagem com seus clientes finais.</p>
                        </section>

                        <section style={{ marginTop: '2rem' }}>
                            <p>Ao utilizar nossos serviços, você concorda com estes termos em sua totalidade.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
