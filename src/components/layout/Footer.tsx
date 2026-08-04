import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-cream)',
      borderTop: '1px solid rgba(207, 168, 95, 0.2)',
      padding: '5rem 0 2rem',
      marginTop: 'auto'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem'
      }}>
        {/* Brand */}
        <div>
          <h3 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.5rem',
            color: 'var(--color-gold)',
            marginBottom: '1.5rem',
            letterSpacing: '2px'
          }}>RITAM GLOBAL</h3>
          <p className="text-slate" style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
            Pure Aromas & Spiritual Elegance for Everyday Rituals.
          </p>
          <p className="text-slate">GSTIN: 24HTGPP7238R1ZP</p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ marginBottom: '1.5rem', letterSpacing: '1px' }}>Explore</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/agarbatti" className="text-slate" style={{ textDecoration: 'none' }}>Agarbatti Catalog</Link></li>
            <li><Link href="/dhoop" className="text-slate" style={{ textDecoration: 'none' }}>Dhoop Collection</Link></li>
            <li><Link href="/cookware" className="text-slate" style={{ textDecoration: 'none' }}>Traditional Cookware</Link></li>
            <li><Link href="/wholesale" className="text-slate" style={{ textDecoration: 'none' }}>Wholesale Orders</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ marginBottom: '1.5rem', letterSpacing: '1px' }}>Contact</h4>
          <address className="text-slate" style={{ fontStyle: 'normal', lineHeight: 1.8 }}>
            92, Indraprasth Society,<br />
            Novino Tarsali Rd, Vadodara,<br />
            Gujarat, India.<br /><br />
            <a href="tel:+917600026495" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>+91 7600026495</a><br />
            <a href="tel:+919426353483" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>+91 9426353483</a>
          </address>
        </div>
      </div>
      
      <div className="container" style={{
        marginTop: '4rem',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        textAlign: 'center',
        fontSize: '0.875rem'
      }}>
        <p className="text-slate">&copy; {new Date().getFullYear()} Ritam Global. All rights reserved.</p>
      </div>
    </footer>
  );
}
