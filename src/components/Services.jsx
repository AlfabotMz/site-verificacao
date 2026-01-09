import React from 'react';
import {
    ShoppingBag,
    Globe,
    Briefcase,
    FileCheck,
    Scale,
    Users,
    GraduationCap,
    Truck,
    Settings
} from 'lucide-react';

const services = [
    { icon: ShoppingBag, title: "Comércio", desc: "Compra e venda de bens diversos." },
    { icon: Globe, title: "Importação e Exportação", desc: "Soluções de comércio internacional." },
    { icon: Briefcase, title: "Consultoria Empresarial", desc: "Assessoria estratégica para negócios." },
    { icon: FileCheck, title: "Auditoria e Fiscalização", desc: "Controle e conformidade rigorosos." },
    { icon: Scale, title: "Consultoria Jurídica", desc: "Apoio legal e laboral especializado." },
    { icon: Truck, title: "Representações", desc: "Comissões e consignações comerciais." },
    { icon: Settings, title: "Prestação de Serviços", desc: "Serviços gerais sob medida." },
    { icon: Users, title: "Recursos Humanos", desc: "Agenciamento e fornecimento de mão de obra." },
    { icon: GraduationCap, title: "Formação", desc: "Capacitação e desenvolvimento de equipes." },
];

export default function Services() {
    return (
        <section id="serviços" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
            <div className="container">
                <div className="text-center mb-8">
                    <span style={{ color: 'var(--accent)', fontWeight: '600', textTransform: 'uppercase' }}>O Que Fazemos</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Nossas Atividades</h2>
                    <p style={{ maxWidth: '600px', margin: '1rem auto', color: 'var(--text-light)' }}>
                        Oferecemos um leque diversificado de serviços para atender às demandas do mercado com qualidade e eficiência.
                    </p>
                </div>

                <div className="grid grid-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="glass"
                            style={{
                                padding: '2rem',
                                borderRadius: '1rem',
                                backgroundColor: 'white',
                                transition: 'transform 0.3s ease',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'rgba(217, 119, 6, 0.1)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: 'var(--accent)'
                            }}>
                                <service.icon size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
