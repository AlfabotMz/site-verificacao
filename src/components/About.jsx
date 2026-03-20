"use client";
import React from 'react';
import { Building2, MapPin, Calendar } from 'lucide-react';

export default function About() {
    return (
        <section id="sobre" className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center' }}>
                    <div>
                        <span style={{ color: 'var(--accent)', fontWeight: '600', textTransform: 'uppercase' }}>Sobre Nós</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                            Sobre o OiChat
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                            O <strong>OiChat</strong> é uma plataforma de comunicação e automação de atendimento ao cliente, projetada para ajudar empresas a gerenciar conversas com seus clientes em canais de mensagens como Facebook Messenger e Instagram.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                            Com o OiChat, as empresas podem receber, organizar e responder a mensagens de clientes a partir de um único painel. A plataforma também permite automatizar respostas comuns, gerenciar solicitações de suporte e melhorar o tempo de resposta.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                            O OiChat utiliza dados de mensagens fornecidos pelas plataformas Facebook e Instagram apenas para permitir que as empresas leiam e respondam às mensagens enviadas por seus clientes. Isso ajuda as empresas a fornecer um melhor atendimento ao cliente e lidar com dúvidas sobre produtos, serviços e pedidos.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '2rem' }}>
                            A plataforma é fornecida e operada pela <strong>EDN Vision, Lda</strong>, uma empresa com sede em Moçambique.
                        </p>

                        <div className="grid grid-2" style={{ gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'var(--bg-main)', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent)' }}>
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Fundada em</div>
                                    <div style={{ fontWeight: '600' }}>2025</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'var(--bg-main)', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div style={{ minWidth: 0 }}>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Sede</div>
                                    <div style={{ fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Tete, Moçambique</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            background: 'var(--bg-main)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            borderLeft: '4px solid var(--accent)'
                        }}>
                            <h3 style={{ marginBottom: '1rem' }}>Excelência Operacional</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ background: 'white', padding: '0.5rem', borderRadius: '50%' }}>
                                    <Building2 size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Soluções Modernas</div>
                                    <div style={{ color: 'var(--text-light)' }}>Visão Estratégica</div>
                                </div>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
                                Focados em oferecer o melhor suporte tecnológico e industrial para o crescimento do seu negócio em Moçambique.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
