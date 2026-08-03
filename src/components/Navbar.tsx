'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(16px)', backgroundColor: 'rgba(11, 26, 48, 0.9)', borderBottom: '1px solid rgba(212, 175, 55, 0.25)' }}>
      {/* Top Bar for Phone Numbers & GSTIN */}
      <div style={{ backgroundColor: '#071222', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', padding: '6px 20px', fontSize: '0.8rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: '#d4af37', fontWeight: 600 }}>GSTIN: 24HTGPP7238R1ZP</span>
            <span style={{ color: '#64748b' }}>|</span>
            <span style={{ color: '#94a3b8' }}>📍 Vadodara, Gujarat, India</span>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span style={{ color: '#94a3b8' }}>📞 Inquiries:</span>
            <a href="tel:+917600026495" style={{ color: '#f3e5ab', textDecoration: 'none', fontWeight: 500 }}>+91 7600026495</a>
            <a href="tel:+919426353483" style={{ color: '#f3e5ab', textDecoration: 'none', fontWeight: 500 }}>+91 9426353483</a>
            <a href="tel:+917600238064" style={{ color: '#f3e5ab', textDecoration: 'none', fontWeight: 500 }}>+91 7600238064</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg, #d4af37 0%, #aa820a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)' }}>
            {/* Lotus & Flute Motif Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b1a30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L15 8H9L12 2Z" />
              <path d="M12 22C17.5 22 21 17 21 12C18 12 15 14 12 17C9 14 6 12 3 12C3 17 6.5 22 12 22Z" />
              <circle cx="12" cy="11" r="2" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '1px', background: 'linear-gradient(135deg, #fff5c0 0%, #d4af37 50%, #aa820a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              RITAM GLOBAL
            </div>
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#94a3b8' }}>
              Incense & Spiritual Products
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>About Us</a>
          <a href="#catalog" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Agarbatti & Dhoop</a>
          <a href="#cookware" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Frying Bowls</a>
          <a href="#why-us" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Why Ritam</a>
          <a href="#wholesale" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Wholesale Inquiry</a>
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a href="https://wa.me/917600026495?text=Hello%20Ritam%20Global,%20I%20would%20like%20to%20inquire%20about%20your%20Incense%20Sticks%20and%20Products." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            💬 WhatsApp Inquiry
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: '1px solid rgba(212, 175, 55, 0.4)', borderRadius: '6px', color: '#d4af37', padding: '6px 10px', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: '#0e1f38', borderTop: '1px solid rgba(212, 175, 55, 0.2)', padding: '15px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f3e5ab', textDecoration: 'none', padding: '6px 0' }}>About Us</a>
          <a href="#catalog" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f3e5ab', textDecoration: 'none', padding: '6px 0' }}>Agarbatti & Dhoop Catalog</a>
          <a href="#cookware" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f3e5ab', textDecoration: 'none', padding: '6px 0' }}>Frying Bowls & Cookware</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f3e5ab', textDecoration: 'none', padding: '6px 0' }}>Why Choose Us</a>
          <a href="#wholesale" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f3e5ab', textDecoration: 'none', padding: '6px 0' }}>Wholesale / Bulk Order</a>
        </div>
      )}
    </header>
  );
}
