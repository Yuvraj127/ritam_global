export default function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '90px 20px 70px 20px', minHeight: '82vh', display: 'flex', alignItems: 'center' }}>
      {/* Smoke Glow Particles */}
      <div className="smoke-particle" style={{ width: '400px', height: '400px', top: '-100px', left: '-50px' }} />
      <div className="smoke-particle" style={{ width: '500px', height: '500px', bottom: '-150px', right: '-100px', animationDelay: '4s' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Hero Left Content */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', marginBottom: '20px' }}>
              <span style={{ color: '#d4af37', fontSize: '0.85rem', fontWeight: 600 }}>✨ Pure Aromas & Spiritual Elegance</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.15, fontWeight: 800, marginBottom: '20px' }}>
              Bring Divine Serenity To Your <span className="text-gold">Everyday Rituals</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '28px', maxWidth: '580px' }}>
              <em>&ldquo;RITAM GLOBAL, already trusted for quality, is now expanding its reach to bring our products closer to you.&rdquo;</em>
            </p>

            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '36px', maxWidth: '540px' }}>
              Manufacturer & Wholesaler of 25+ Premium Agarbatti Fragrances, Colored Incense, Natural Masala Agarbatti, Dry Dhoop Sticks & Cones, and Traditional Enamel Frying Bowls.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <a href="#catalog" className="btn-gold">
                🔥 Explore Catalog (35+ Products)
              </a>
              <a href="#wholesale" className="btn-outline-gold">
                📋 Inquire Wholesale / Bulk
              </a>
            </div>

            {/* Business Trust Metrics */}
            <div style={{ display: 'flex', gap: '30px', marginTop: '45px', paddingTop: '30px', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d4af37', fontFamily: 'Cinzel, serif' }}>25+</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Standard Fragrances</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d4af37', fontFamily: 'Cinzel, serif' }}>7</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Dry Dhoop Formats</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d4af37', fontFamily: 'Cinzel, serif' }}>₹50+</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Traditional Cookware</div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.4)', background: 'linear-gradient(145deg, rgba(17, 37, 68, 0.8) 0%, rgba(11, 26, 48, 0.9) 100%)' }}>
              <div style={{ width: '90px', height: '90px', margin: '0 auto 20px auto', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, rgba(17,37,68,0) 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '3rem' }}>🪔</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f3e5ab' }}>Ritam Spiritual Guarantee</h3>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '24px' }}>
                Each product is made with care to ensure top-quality and trustworthiness for your everyday spiritual needs.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', textAlign: 'left' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(212,175,55,0.15)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#d4af37', fontWeight: 600 }}>NATURAL INGREDIENTS</div>
                  <div style={{ fontSize: '0.85rem', color: '#f8fafc' }}>Pure Resins & Essential Oils</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(212,175,55,0.15)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#d4af37', fontWeight: 600 }}>WHOLESALE TIERS</div>
                  <div style={{ fontSize: '0.85rem', color: '#f8fafc' }}>Direct Manufacturer Pricing</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(212,175,55,0.15)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#d4af37', fontWeight: 600 }}>CUSTOM ORDERS</div>
                  <div style={{ fontSize: '0.85rem', color: '#f8fafc' }}>Private Labeling & Blends</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(212,175,55,0.15)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#d4af37', fontWeight: 600 }}>FAST DISPATCH</div>
                  <div style={{ fontSize: '0.85rem', color: '#f8fafc' }}>Vadodara Dispatch Hub</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
