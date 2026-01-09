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
                            <LegalItem label="Entidade Legal" value="T-MESHU CONSULTORIA E SERVIÇOS, SOCIEDADE UNIPESSOAL, LDA" />
                            <LegalItem label="Tipo" value="Sociedade por Quotas Unipessoal (Lda)" />
                            <LegalItem label="NUIT" value="10021607" />
                            <LegalItem label="Data de Constituição" value="06 de Maio de 2011" />
                            <LegalItem label="Registo" value="Conservatória das Entidades Legais" />
                            <LegalItem label="Capital Social" value="10.000,00 MT (Totalmente Realizado)" />
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
                                <AddressItem label="Cidade" value="Maputo" />
                                <AddressItem label="Distrito" value="Kamavota" />
                                <AddressItem label="Bairro" value="Jardim" />
                                <AddressItem label="Rua" value="Rua do Jardim nº 793" />
                                <AddressItem label="Andar" value="Rés-do-chão (R/C)" />
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
