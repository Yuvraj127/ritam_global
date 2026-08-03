export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#071222', borderTop: '1px solid rgba(212, 175, 55, 0.25)', padding: '60px 20px 30px 20px', color: '#94a3b8' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        
        {/* Col 1: Brand Info */}
        <div>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.4rem', fontWeight: 800, color: '#d4af37', marginBottom: '12px' }}>
            RITAM GLOBAL
          </div>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#cbd5e1', marginBottom: '16px' }}>
            Manufacturer, Wholesaler & Supplier of Incense Sticks (Agarbatti), Dry Dhoop (Sticks & Cones), and Traditional Enamel Frying Bowls.
          </p>
          <div style={{ fontSize: '0.8rem', color: '#d4af37', fontWeight: 600 }}>
            GSTIN: 24HTGPP7238R1ZP
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 style={{ color: '#f3e5ab', fontSize: '1rem', marginBottom: '14px', fontFamily: 'Cinzel, serif' }}>Quick Navigation</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
            <li><a href="#catalog" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Standard Agarbatti (25 Scents)</a></li>
            <li><a href="#catalog" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Colored Agarbatti Collection</a></li>
            <li><a href="#catalog" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Premium Incense Collection</a></li>
            <li><a href="#catalog" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Masala Agarbatti & Dry Dhoop</a></li>
            <li><a href="#cookware" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Enamel Frying Bowls (14cm - 36cm)</a></li>
          </ul>
        </div>

        {/* Col 3: Business Address & Contact */}
        <div>
          <h4 style={{ color: '#f3e5ab', fontSize: '1rem', marginBottom: '14px', fontFamily: 'Cinzel, serif' }}>Contact & Factory Address</h4>
          <div style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#cbd5e1' }}>
            <p style={{ marginBottom: '10px' }}>
              📍 92, Indraprasth Society, Novino Tarsali Rd, Vadodara, Gujarat, India.
            </p>
            <p style={{ marginBottom: '4px' }}>📞 <a href="tel:+917600026495" style={{ color: '#f8fafc', textDecoration: 'none' }}>+91 7600026495</a></p>
            <p style={{ marginBottom: '4px' }}>📞 <a href="tel:+919426353483" style={{ color: '#f8fafc', textDecoration: 'none' }}>+91 9426353483</a></p>
            <p style={{ marginBottom: '4px' }}>📞 <a href="tel:+917600238064" style={{ color: '#f8fafc', textDecoration: 'none' }}>+91 7600238064</a></p>
          </div>
        </div>

        {/* Col 4: Quality Commitment */}
        <div>
          <h4 style={{ color: '#f3e5ab', fontSize: '1rem', marginBottom: '14px', fontFamily: 'Cinzel, serif' }}>Our Commitment</h4>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#cbd5e1', fontStyle: 'italic' }}>
            &ldquo;Each product is made with care to ensure top-quality and trustworthiness for your everyday spiritual needs.&rdquo;
          </p>
          <div style={{ marginTop: '16px' }}>
            <a href="https://wa.me/917600026495?text=Hello%20Ritam%20Global" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center', fontSize: '0.8rem', color: '#64748b' }}>
        © {new Date().getFullYear()} RITAM GLOBAL. All rights reserved. GSTIN: 24HTGPP7238R1ZP | Vadodara, Gujarat, India.
      </div>
    </footer>
  );
}
