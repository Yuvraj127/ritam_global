"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";

// Master Catalog Data (41 Items)
const agarbattiProducts = [
  // Standard (25)
  { id: 's1', name: 'Mogra', category: 'Standard', scent: 'Floral', price: 50, img: '/pack-standard.jpg', desc: 'Sacred jasmine floral scent for daily devotion.' },
  { id: 's2', name: 'Rudraraksh', category: 'Standard', scent: 'Woody', price: 50, img: '/pack-standard.jpg', desc: 'Spiritual woodsy aroma for deep meditation.' },
  { id: 's3', name: 'Pandadi', category: 'Standard', scent: 'Herbal', price: 50, img: '/pack-standard.jpg', desc: 'Fresh herbal blend for a clean atmosphere.' },
  { id: 's4', name: 'Kasturi', category: 'Standard', scent: 'Musk', price: 50, img: '/pack-standard.jpg', desc: 'Exotic musk fragrance invoking ancient rituals.' },
  { id: 's5', name: 'Lavender', category: 'Standard', scent: 'Floral', price: 50, img: '/pack-standard.jpg', desc: 'Soothing floral notes for relaxation.' },
  { id: 's6', name: 'Gulab', category: 'Standard', scent: 'Floral', price: 50, img: '/pack-standard.jpg', desc: 'Classic rose essence for purity and love.' },
  { id: 's7', name: 'Bharatvasi', category: 'Standard', scent: 'Devotional', price: 50, img: '/pack-standard.jpg', desc: 'Traditional authentic Indian blend.' },
  { id: 's8', name: 'Wood', category: 'Standard', scent: 'Woody', price: 50, img: '/pack-standard.jpg', desc: 'Rich and earthy woody aroma.' },
  { id: 's9', name: 'Darshan', category: 'Standard', scent: 'Devotional', price: 50, img: '/pack-standard.jpg', desc: 'Divine temple fragrance for morning prayers.' },
  { id: 's10', name: 'Namo', category: 'Standard', scent: 'Devotional', price: 50, img: '/pack-standard.jpg', desc: 'Sacred essence for spiritual awakening.' },
  { id: 's11', name: 'Chandan', category: 'Standard', scent: 'Woody', price: 50, img: '/pack-standard.jpg', desc: 'Pure sandalwood for cooling energy.' },
  { id: 's12', name: 'Gugad', category: 'Standard', scent: 'Resin', price: 50, img: '/pack-standard.jpg', desc: 'Traditional guggul resinoid for purification.' },
  { id: 's13', name: 'Pavitra', category: 'Standard', scent: 'Devotional', price: 50, img: '/pack-standard.jpg', desc: 'Pure temple aroma for holy rituals.' },
  { id: 's14', name: 'Ponds', category: 'Standard', scent: 'Fresh', price: 50, img: '/pack-standard.jpg', desc: 'Fresh aquatic scent resembling cool waters.' },
  { id: 's15', name: 'Garden', category: 'Standard', scent: 'Floral', price: 50, img: '/pack-standard.jpg', desc: 'A vibrant blossom mix of exotic flowers.' },
  { id: 's16', name: 'Kewda', category: 'Standard', scent: 'Floral', price: 50, img: '/pack-standard.jpg', desc: 'Sweet pandanus floral note used in festivities.' },
  { id: 's17', name: 'Loban', category: 'Standard', scent: 'Resin', price: 50, img: '/pack-standard.jpg', desc: 'Frankincense/Benzoin for removing negativity.' },
  { id: 's18', name: 'Charlie', category: 'Standard', scent: 'Modern', price: 50, img: '/pack-standard.jpg', desc: 'Modern fine scent for everyday living.' },
  { id: 's19', name: 'Firdosh', category: 'Standard', scent: 'Oriental', price: 50, img: '/pack-standard.jpg', desc: 'Heavenly oriental blend.' },
  { id: 's20', name: 'Rangili', category: 'Standard', scent: 'Floral', price: 50, img: '/pack-standard.jpg', desc: 'Vibrant and uplifting floral mix.' },
  { id: 's21', name: 'Ratrani', category: 'Standard', scent: 'Floral', price: 50, img: '/pack-standard.jpg', desc: 'Night-blooming jasmine for evening calm.' },
  { id: 's22', name: 'Jasmine', category: 'Standard', scent: 'Floral', price: 50, img: '/pack-standard.jpg', desc: 'Pure classic floral jasmine.' },
  { id: 's23', name: 'Deshvasi', category: 'Standard', scent: 'Traditional', price: 50, img: '/pack-standard.jpg', desc: 'Authentic Indian traditional scent.' },
  { id: 's24', name: 'Dollar', category: 'Standard', scent: 'Premium', price: 50, img: '/pack-standard.jpg', desc: 'Premium rich scent for prosperity.' },
  { id: 's25', name: 'Pineapple', category: 'Standard', scent: 'Fruity', price: 50, img: '/pack-standard.jpg', desc: 'Sweet and fruity tropical scent.' },
  // Colored (7)
  { id: 'c1', name: 'Gulab (Pink)', category: 'Colored', scent: 'Floral', price: 60, img: '/pack-colored.jpg', desc: 'Pink colored sticks infused with classic rose.' },
  { id: 'c2', name: 'Rangili (Golden)', category: 'Colored', scent: 'Floral', price: 60, img: '/pack-colored.jpg', desc: 'Golden sticks with a vibrant floral mix.' },
  { id: 'c3', name: 'Manthan (Blue)', category: 'Colored', scent: 'Fresh', price: 60, img: '/pack-colored.jpg', desc: 'Blue colored sticks with a fresh churning aroma.' },
  { id: 'c4', name: 'Kasturi (Green)', category: 'Colored', scent: 'Musk', price: 60, img: '/pack-colored.jpg', desc: 'Green sticks featuring exotic musk.' },
  { id: 'c5', name: 'Vaishnavi (Silver)', category: 'Colored', scent: 'Devotional', price: 60, img: '/pack-colored.jpg', desc: 'Silver colored sticks for divine worship.' },
  { id: 'c6', name: 'Deshvasi (Purple)', category: 'Colored', scent: 'Traditional', price: 60, img: '/pack-colored.jpg', desc: 'Purple sticks capturing the traditional essence.' },
  { id: 'c7', name: 'Kashi Dhoop (Parrot Green)', category: 'Colored', scent: 'Devotional', price: 60, img: '/pack-colored.jpg', desc: 'Parrot green sticks embodying holy Kashi.' },
  // Premium (7)
  { id: 'p1', name: 'Maruti Gold', category: 'Premium', scent: 'Premium', price: 120, img: '/pack-premium.jpg', desc: 'Handcrafted brown stick with rich aromatic oils.' },
  { id: 'p2', name: 'Keshav', category: 'Premium', scent: 'Premium', price: 120, img: '/pack-premium.jpg', desc: 'Slow-burning brown stick for extended rituals.' },
  { id: 'p3', name: 'Mohini', category: 'Premium', scent: 'Premium', price: 120, img: '/pack-premium.jpg', desc: 'Captivating premium brown stick.' },
  { id: 'p4', name: 'Vedant', category: 'Premium', scent: 'Premium', price: 120, img: '/pack-premium.jpg', desc: 'Deep philosophical aroma in a brown stick.' },
  { id: 'p5', name: 'Navratna', category: 'Premium', scent: 'Premium', price: 120, img: '/pack-premium.jpg', desc: 'Nine-gem luxury blend in a brown stick.' },
  { id: 'p6', name: 'Shikhar', category: 'Premium', scent: 'Premium', price: 120, img: '/pack-premium.jpg', desc: 'The peak of premium fragrance (brown stick).' },
  { id: 'p7', name: 'Sai Gold', category: 'Premium', scent: 'Premium', price: 120, img: '/pack-premium.jpg', desc: 'Divine white/cream stick with exquisite oils.' },
  // Masala (2)
  { id: 'm1', name: 'Gugad (Masala)', category: 'Masala', scent: 'Resin', price: 100, img: '/pack-masala.jpg', desc: 'Thick, slow-burning white/cream traditional masala.' },
  { id: 'm2', name: 'Loban (Masala)', category: 'Masala', scent: 'Resin', price: 100, img: '/pack-masala.jpg', desc: 'Thick brown masala incense crafted with natural resins.' },
];

const categories = ['All', 'Standard', 'Colored', 'Premium', 'Masala'];

export default function AgarbattiCatalog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof agarbattiProducts[0] | null>(null);

  // Filter logic
  const filteredProducts = agarbattiProducts.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.scent.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: '4rem 0', minHeight: '80vh', backgroundColor: 'var(--color-ivory)', position: 'relative' }}>
      
      {/* Quick View Modal Overlay */}
      {selectedProduct && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)',
          zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
        }} onClick={() => setSelectedProduct(null)}>
          <div className="glass" style={{
            maxWidth: '600px', width: '100%', backgroundColor: 'var(--color-cream)',
            borderRadius: 'var(--radius-lg)', padding: '2.5rem', position: 'relative',
            boxShadow: 'var(--shadow-hover)'
          }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedProduct(null)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--color-slate)' }}
            >
              ✕
            </button>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: '100%', maxWidth: '250px', height: '250px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
              <div style={{ flex: 1, minWidth: '200px' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(207, 168, 95, 0.1)', color: 'var(--color-gold-dark)', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                  {selectedProduct.category} Collection
                </span>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>{selectedProduct.name}</h2>
                <p style={{ color: 'var(--color-slate)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>{selectedProduct.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(207, 168, 95, 0.2)', paddingTop: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-slate)' }}>Estimated Price</div>
                    <div style={{ fontSize: '1.8rem', color: 'var(--color-gold)', fontFamily: 'var(--font-cormorant)' }}>₹{selectedProduct.price}</div>
                  </div>
                  <Button href={`https://wa.me/917600026495?text=${encodeURIComponent(`Hello Ritam Global, I am interested in a bulk inquiry for your Agarbatti: ${selectedProduct.name} (${selectedProduct.category}).`)}`} variant="primary" target="_blank">Bulk Inquiry</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>Agarbatti Catalog</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-slate)', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Explore our complete collection of 41 premium fragrances. Use the filters below to find your perfect spiritual aroma.
        </p>

        {/* Tabbed Filters & Search */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', backgroundColor: 'var(--color-cream)', padding: '1rem 2rem', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-soft)' }}>
          
          <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '4px' }} className="hide-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: activeCategory === cat ? 'var(--color-gold)' : 'transparent',
                  color: activeCategory === cat ? '#fff' : 'var(--color-slate)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <input 
            type="text" 
            placeholder="Search fragrances..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(207, 168, 95, 0.3)',
              backgroundColor: 'transparent',
              outline: 'none',
              fontFamily: 'var(--font-outfit)',
              fontSize: '0.95rem',
              color: 'var(--color-charcoal)',
              minWidth: '250px'
            }}
          />
        </div>

        {/* Product Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProducts.map(product => (
            <div key={product.id} className="glass" style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(207, 168, 95, 0.15)'
            }}>
              <img src={product.img} alt={product.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-charcoal)', margin: 0 }}>{product.name}</h3>
                  <span style={{ fontSize: '1.25rem', color: 'var(--color-gold)', fontFamily: 'var(--font-cormorant)' }}>₹{product.price}</span>
                </div>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>{product.desc}</p>
                <button 
                  onClick={() => setSelectedProduct(product)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--color-gold)',
                    color: 'var(--color-gold)',
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '0.8rem',
                    fontWeight: 500
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-gold)';
                  }}
                >
                  Quick View
                </button>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--color-slate)' }}>
              No fragrances found matching your search.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
