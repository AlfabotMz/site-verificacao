"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
                            <Shield size={32} />
                        </div>
                        <h1 style={{ fontSize: '2.5rem' }}>Política de Privacidade</h1>
                    </div>

                    <div className="policy-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
                        <section>
                            <p>Esta Política de Privacidade explica como o <strong>OiChat</strong> coleta e utiliza informações ao fornecer serviços de automação de mensagens.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Informações Coletadas</h2>
                            <p>Podemos coletar informações como mensagens enviadas por usuários, identificadores de conta e dados básicos de perfil fornecidos através das plataformas Facebook e Instagram.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Como utilizamos as informações</h2>
                            <p>Esses dados são usados apenas para ajudar as empresas a gerenciar conversas, responder a consultas de clientes e fornecer suporte ao cliente através de nossa plataforma.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Compartilhamento de Dados</h2>
                            <p>Não vendemos nem compartilhamos dados pessoais com terceiros.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Segurança de Dados</h2>
                            <p>Tomamos medidas razoáveis para proteger os dados armazenados em nossos sistemas.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Uso de Dados do Facebook</h2>
                            <p>O OiChat utiliza dados do Facebook e Instagram estritamente para as finalidades de comunicação autorizadas pelo cliente e permitidas pelas políticas da plataforma Meta.</p>
                        </section>

                        <section style={{ marginTop: '2rem', padding: '2rem', background: 'var(--bg-main)', borderRadius: '1rem' }}>
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Contato</h2>
                            <p><strong>EDN Vision, Lda</strong></p>
                            <p>Email: <a href="mailto:support@oichat.co" style={{ color: 'var(--accent)' }}>support@oichat.co</a></p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
