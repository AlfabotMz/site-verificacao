import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo">
          <h1 style={{ fontSize: '1.5rem', fontWeight: '800', color: isScrolled ? 'var(--primary)' : 'white' }}>
            EDN VISION
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', gap: '2rem' }}>
            {['Sobre', 'Serviços', 'Dados Legais', 'Contato'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  style={{
                    color: isScrolled ? 'var(--text-main)' : 'white',
                    fontWeight: '500'
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: isScrolled ? 'var(--primary)' : 'white',
            cursor: 'pointer',
            display: 'block' // Show on mobile by default, hide on desktop via media query
          }}
          className="mobile-toggle"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          padding: '2rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
            {['Sobre', 'Serviços', 'Dados Legais', 'Contato'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ color: 'var(--primary)', fontWeight: '600' }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
