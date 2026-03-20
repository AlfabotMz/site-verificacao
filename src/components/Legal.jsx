"use client";
import React from 'react';

export default function Legal() {
    return (
        <section id="dados-legais" className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="grid grid-2" style={{ gap: '4rem' }}>
                    <div>
                        <span style={{ color: 'var(--accent)', fontWeight: '600', textTransform: 'uppercase' }}>Transparência</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Dados Legais</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <LegalItem label="Entidade Legal" value="EDN VISION, LDA" />
                            <LegalItem label="Tipo" value="Sociedade por Quotas" />
                            <LegalItem label="NUEL" value="105055676" />
                            <LegalItem label="Data de Constituição" value="03 de Setembro de 2025" />
                            <LegalItem label="Data de Registo" value="04 de Setembro de 2025" />
                            <LegalItem label="Registo" value="Conservatória das Entidades Legais – Direcção Nacional dos Registos e Notariado" />
                            <LegalItem label="Capital Social" value="40.000,00 MT (Capital Realizado)" />
                        </div>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Endereço Legal</h3>
                        <div style={{
                            backgroundColor: 'var(--bg-main)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <AddressItem label="País" value="Moçambique" />
                                <AddressItem label="Província" value="Tete" />
                                <AddressItem label="Cidade" value="Cidade de Tete" />
                                <AddressItem label="Distrito" value="Tete" />
                                <AddressItem label="Bairro" value="Chingodzi" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LegalItem({ label, value }) {
    return (
        <div style={{ borderBottom: '1px solid var(--bg-main)', paddingBottom: '0.5rem' }}>
            <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.25rem' }}>
                {label}
            </span>
            <span style={{ fontWeight: '500', color: 'var(--primary)' }}>{value}</span>
        </div>
    );
}

function AddressItem({ label, value }) {
    return (
        <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-light)' }}>{label}:</span>
            <span style={{ fontWeight: '600', color: 'var(--primary)' }}>{value}</span>
        </li>
    );
}
