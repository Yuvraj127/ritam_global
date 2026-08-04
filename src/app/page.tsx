import React from "react";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Subtle background particles */}
        <div className="dust-particle" style={{ top: '15%', left: '10%', width: '150px', height: '150px' }} />
        <div className="dust-particle" style={{ top: '60%', right: '15%', width: '250px', height: '250px', animationDelay: '2s' }} />
        <div className="dust-particle" style={{ top: '30%', left: '50%', width: '100px', height: '100px', animationDelay: '4s' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}>
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: 'var(--color-charcoal)'
          }}>
            Pure Aromas &<br />
            <span className="text-gold" style={{ fontStyle: 'italic' }}>Spiritual Elegance</span>
          </h1>
          <p className="text-slate" style={{
            fontSize: '1.25rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
            padding: '0 1rem'
          }}>
            Crafted with care using premium natural ingredients for your everyday rituals. Experience the divine essence of Ritam Global.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/agarbatti" variant="primary">Explore Agarbatti</Button>
            <Button href="/dhoop" variant="outline">View Dhoop</Button>
            <Button href="/cookware" variant="outline" style={{ borderColor: 'var(--color-slate)', color: 'var(--color-slate)' }}>Traditional Cookware</Button>
          </div>
        </div>
      </section>

      {/* Intro Note Section */}
      <section className="bg-cream section-padding" style={{ borderTop: '1px solid rgba(207, 168, 95, 0.2)', borderBottom: '1px solid rgba(207, 168, 95, 0.2)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-gold)' }}>Our Promise</h2>
          <p className="text-slate" style={{ fontSize: '1.15rem', lineHeight: 2 }}>
            Ritam Global, already trusted for quality, is expanding its reach to bring our products closer to you.
            Each product is made with care to ensure top-quality and trustworthiness for your everyday spiritual needs.
          </p>
        </div>
      </section>
    </>
  );
}
