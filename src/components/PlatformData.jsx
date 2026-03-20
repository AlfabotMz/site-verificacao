"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Database, ArrowLeft } from 'lucide-react';

export default function PlatformData() {
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
                            <Database size={32} />
                        </div>
                        <h1 style={{ fontSize: '2.5rem' }}>Uso de Dados da Plataforma</h1>
                    </div>

                    <div className="policy-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
                        <p>O <strong>OiChat</strong> utiliza dados fornecidos por meio das APIs do Facebook e Instagram para ajudar as empresas a se comunicarem com seus clientes.</p>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Uso de Dados da Plataforma</h2>
                            <p>Mensagens e identificadores básicos de usuário são usados apenas para permitir que as empresas leiam e respondam às mensagens dos clientes dentro da plataforma OiChat.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Finalidade</h2>
                            <p>O objetivo do uso desses dados é fornecer suporte ao cliente, gerenciar conversas e automatizar respostas.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Proteção de Dados</h2>
                            <p>O OiChat não vende, aluga ou faz mau uso dos dados da plataforma.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Conformidade</h2>
                            <p>Nossa plataforma está em conformidade com as Políticas da Plataforma do Facebook e utiliza os dados apenas para os fins aprovados pelos clientes.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
