"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
        {/* Image Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img 
            src="/logo.png" 
            alt="Ritam Global Logo" 
            style={{ height: '60px', width: 'auto', objectFit: 'contain' }} 
          />
        </Link>
        
        {/* Hamburger Icon */}
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Navigation Links */}
        <nav className={`mobile-nav-container ${isOpen ? 'open' : ''}`}>
          <Link href="/agarbatti" className="text-slate" style={{ textDecoration: 'none', transition: 'color 0.2s', fontSize: '1rem', letterSpacing: '1px' }}>Agarbatti</Link>
          <Link href="/dhoop" className="text-slate" style={{ textDecoration: 'none', transition: 'color 0.2s', fontSize: '1rem', letterSpacing: '1px' }}>Dhoop</Link>
          <Link href="/cookware" className="text-slate" style={{ textDecoration: 'none', transition: 'color 0.2s', fontSize: '1rem', letterSpacing: '1px' }}>Frying Bowls</Link>
          <Link href="/about" className="text-slate" style={{ textDecoration: 'none', transition: 'color 0.2s', fontSize: '1rem', letterSpacing: '1px' }}>About</Link>
          <Button href="/wholesale" variant="outline">Wholesale Inquiry</Button>
        </nav>
      </div>
    </header>
  );
}
