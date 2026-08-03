'use client';

import { useState } from 'react';

export default function WholesaleForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    businessType: 'Wholesaler / Distributor',
    interestedProduct: 'Standard Agarbatti (25 Scents)',
    estimatedQuantity: '100 - 500 Packs',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Ritam Global,\n\n*Wholesale / Bulk Inquiry*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*City:* ${formData.city}\n*Business Type:* ${formData.businessType}\n*Interested Product:* ${formData.interestedProduct}\n*Quantity:* ${formData.estimatedQuantity}\n*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/917600026495?text=${text}`, '_blank');
  };

  return (
    <section id="wholesale" style={{ padding: '80px 20px', backgroundColor: 'rgba(7, 18, 34, 0.8)', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Info Column */}
          <div>
            <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '20px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', marginBottom: '10px', fontSize: '0.8rem', color: '#d4af37', fontWeight: 600, textTransform: 'uppercase' }}>
              Direct Factory Orders
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#f8fafc', fontWeight: 800, lineHeight: 1.25, marginBottom: '16px' }}>
              Wholesale & <span className="text-gold">Bulk Order Inquiry</span>
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
              We partner with incense distributors, retail shop owners, temple management committees, and bulk exporters across India.
            </p>

            <div className="glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
              <div style={{ color: '#f3e5ab', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>📍 Vadodara Factory Address</div>
              <div style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5 }}>
                92, Indraprasth Society, Novino Tarsali Rd, Vadodara, Gujarat, India.
              </div>
              <div style={{ marginTop: '10px', color: '#d4af37', fontSize: '0.85rem', fontWeight: 600 }}>
                GSTIN: 24HTGPP7238R1ZP
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>DIRECT PHONE HELPLINES:</div>
              <a href="tel:+917600026495" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>
                📞 +91 7600026495 (Primary Sales)
              </a>
              <a href="tel:+919426353483" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>
                📞 +91 9426353483 (Wholesale Desk)
              </a>
              <a href="tel:+917600238064" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>
                📞 +91 7600238064 (Factory Orders)
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#f3e5ab', marginBottom: '6px' }}>Submit Bulk Inquiry</h3>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '20px' }}>Fill out the details below to receive factory rates on WhatsApp:</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '4px' }}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: '#0b1a30', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#fff', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '4px' }}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 Mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: '#0b1a30', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#fff', fontSize: '0.9rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '4px' }}>City / State *</label>
                  <input
                    type="text"
                    required
                    placeholder="Vadodara, Surat..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: '#0b1a30', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#fff', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '4px' }}>Interested Product Category</label>
                <select
                  value={formData.interestedProduct}
                  onChange={(e) => setFormData({ ...formData, interestedProduct: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: '#0b1a30', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#fff', fontSize: '0.9rem' }}
                >
                  <option value="Standard Agarbatti (25 Scents)">Standard Agarbatti (25 Scents)</option>
                  <option value="Colored Agarbatti (Gulab, Rangili, etc.)">Colored Agarbatti Collection</option>
                  <option value="Premium Incense (Maruti Gold, Sai Gold)">Premium Incense Collection</option>
                  <option value="Big Size Masala Agarbatti">Big Size Masala Agarbatti</option>
                  <option value="Dry Dhoop Sticks & Cones">Dry Dhoop Sticks & Cones</option>
                  <option value="Enamel Frying Bowls & Cookware">Enamel Frying Bowls & Cookware</option>
                  <option value="Full Product Range Mix">Full Product Range Mix</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '4px' }}>Additional Requirement Notes</label>
                <textarea
                  rows={3}
                  placeholder="Specify scents or sizes needed..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: '#0b1a30', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#fff', fontSize: '0.9rem' }}
                />
              </div>

              <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}>
                🚀 Send Instant WhatsApp Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
