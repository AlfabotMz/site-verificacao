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
                            Compromisso com a Excelência em Moçambique
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                            A <strong>EDN Vision, Lda</strong> é uma empresa moçambicana especializada no fornecimento de soluções tecnológicas, industriais e empresariais.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '2rem' }}>
                            A empresa atua nas áreas de fornecimento de material informático, desenvolvimento de software, manutenção de redes, serviços de contabilidade, recursos humanos e fornecimento de equipamentos industriais, oferecendo soluções modernas para empresas e organizações.
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
