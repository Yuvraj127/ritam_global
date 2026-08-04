import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="glass" style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      borderBottom: '1px solid rgba(207, 168, 95, 0.2)',
      borderRadius: 0
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 2rem'
      }}>
        {/* Elegant Text Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontSize: '1.5rem',
            fontFamily: 'var(--font-cormorant)',
            color: 'var(--color-charcoal)',
            letterSpacing: '3px',
            textTransform: 'uppercase'
          }}>
            Ritam Global
          </span>
        </Link>
        
        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <Link href="/agarbatti" className="text-slate" style={{ textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.9rem', letterSpacing: '1px' }}>Agarbatti</Link>
          <Link href="/dhoop" className="text-slate" style={{ textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.9rem', letterSpacing: '1px' }}>Dhoop</Link>
          <Link href="/cookware" className="text-slate" style={{ textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.9rem', letterSpacing: '1px' }}>Frying Bowls</Link>
          <Link href="/about" className="text-slate" style={{ textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.9rem', letterSpacing: '1px' }}>About</Link>
          <Button href="/wholesale" variant="outline">Wholesale Inquiry</Button>
        </nav>
      </div>
    </header>
  );
}
