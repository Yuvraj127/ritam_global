import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Promotional Hero Banner */}
      <section style={{
        width: '100%',
        position: 'relative',
        backgroundColor: 'var(--color-cream)',
        borderBottom: '1px solid rgba(207, 168, 95, 0.2)'
      }}>
        {/* The user will upload their own promo-banner.jpg to the public folder */}
        <Link href="/agarbatti">
          <img 
            src="/promo-banner.jpg" 
            alt="Ritam Global Promotional Banner - Incense Sticks & Dhoop" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              minHeight: '40vh',
              maxHeight: '70vh', 
              objectFit: 'cover', 
              display: 'block' 
            }}
          />
        </Link>
      </section>

      {/* Visual Category Links (Image Buttons) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-charcoal)' }}>
            Explore Our <span className="text-gold">Collections</span>
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            {/* Agarbatti Image Button */}
            <Link href="/agarbatti" style={{ textDecoration: 'none' }}>
              <div className="glass category-card" style={{ 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                cursor: 'pointer',
                border: '1px solid rgba(207, 168, 95, 0.2)'
              }}>
                <img src="/category-agarbatti.jpg" alt="Agarbatti" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.8)' }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-charcoal)', margin: 0 }}>Agarbatti</h3>
                </div>
              </div>
            </Link>

            {/* Dhoop Image Button */}
            <Link href="/dhoop" style={{ textDecoration: 'none' }}>
              <div className="glass category-card" style={{ 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                cursor: 'pointer',
                border: '1px solid rgba(207, 168, 95, 0.2)'
              }}>
                <img src="/category-dhoop.jpg" alt="Dry Dhoop" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.8)' }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-charcoal)', margin: 0 }}>Dry Dhoop</h3>
                </div>
              </div>
            </Link>

            {/* Cookware Image Button */}
            <Link href="/cookware" style={{ textDecoration: 'none' }}>
              <div className="glass category-card" style={{ 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                cursor: 'pointer',
                border: '1px solid rgba(207, 168, 95, 0.2)'
              }}>
                <img src="/category-cookware.jpg" alt="Traditional Cookware" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.8)' }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-charcoal)', margin: 0 }}>Traditional Cookware</h3>
                </div>
              </div>
            </Link>

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
