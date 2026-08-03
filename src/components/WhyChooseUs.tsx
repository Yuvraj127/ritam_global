export default function WhyChooseUs() {
  const features = [
    {
      icon: '🛡️',
      title: 'Top-Quality Assurance',
      description: 'Crafted with care using non-toxic natural aromatic oils, gums, and resins to ensure trustworthy everyday spiritual use.'
    },
    {
      icon: '🌿',
      title: '25+ Scent Spectrum',
      description: 'From classical Rose and Chandan to sacred Guggul, Loban, and exotic floral blends available in sticks & dhoop cones.'
    },
    {
      icon: '🏬',
      title: 'Wholesale & Bulk Supply',
      description: 'Manufacturer direct pricing, custom master cartons, and wholesale tiers for distributors, retailers, and temple authorities.'
    },
    {
      icon: '✨',
      title: 'Customized Orders Available',
      description: 'Private labeling, bespoke scent blending, custom stick color choices, and custom size packaging upon request.'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'Clear, competitive pricing across our entire catalog from ₹50 traditional cookware to premium masala agarbattis.'
    },
    {
      icon: '🚚',
      title: 'Reliable Vadodara Dispatch',
      description: 'Fast, secure dispatch across India directly from our central facility at Novino Tarsali Rd, Vadodara.'
    }
  ];

  return (
    <section id="why-us" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '20px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', marginBottom: '10px', fontSize: '0.8rem', color: '#d4af37', fontWeight: 600, textTransform: 'uppercase' }}>
          Why Choose Ritam Global
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f8fafc', fontWeight: 800 }}>
          Already Trusted For <span className="text-gold">Quality & Excellence</span>
        </h2>
        <p style={{ color: '#cbd5e1', maxWidth: '620px', margin: '12px auto 0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
          <em>&ldquo;Each product is made with care to ensure top-quality and trustworthiness for your everyday spiritual needs.&rdquo;</em>
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {features.map((f, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '28px' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '14px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '18px' }}>
              {f.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', fontWeight: 700, marginBottom: '8px' }}>
              {f.title}
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
