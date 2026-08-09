"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";

// Master Cookware Catalog (9 Items)
const cookwareItems = [
  { id: 'v-small', name: 'Vagariya (Small)', size: 14, price: 50, type: 'Tempering Pan', desc: 'Small tempering / tadka pan', img: '/bowl-tempering.jpg' },
  { id: 'v-large', name: 'Vagariya (Large)', size: 16, price: 60, type: 'Tempering Pan', desc: 'Large tempering / tadka pan', img: '/bowl-tempering.jpg' },
  { id: 'vad-s', name: 'Vadka (Small)', size: 20, price: 100, type: 'Deep Bowl', desc: 'Deep traditional bowl', img: '/bowl-deep.jpg' },
  { id: 'vad-m', name: 'Vadka (Medium)', size: 26, price: 150, type: 'Deep Bowl', desc: 'Medium deep traditional bowl', img: '/bowl-deep.jpg' },
  { id: 'vad-l', name: 'Vadka (Large)', size: 30, price: 200, type: 'Deep Bowl', desc: 'Large deep traditional bowl', img: '/bowl-deep.jpg' },
  { id: 'vad-xl', name: 'Vadka (Larger)', size: 36, price: 250, type: 'Deep Bowl', desc: 'Extra-large deep traditional bowl', img: '/bowl-deep.jpg' },
  { id: 'mal', name: 'Malpuda', size: 26, price: 120, type: 'Shallow Bowl', desc: 'Wide shallow frying/serving bowl', img: '/bowl-deep.jpg' },
  { id: 'lid-s', name: 'Bowl with Lid (Small)', size: 17, price: 200, type: 'Covered Bowl', desc: 'Covered bowl with red knob lid', img: '/bowl-lid.jpg' },
  { id: 'lid-l', name: 'Bowl with Lid (Large)', size: 26, price: 250, type: 'Covered Bowl', desc: 'Covered bowl with red knob lid', img: '/bowl-lid.jpg' },
];

const categories = ['All', 'Tempering Pan', 'Deep Bowl', 'Shallow Bowl', 'Covered Bowl'];

export default function CookwareCatalog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof cookwareItems[0] | null>(null);

  // Filter logic
  const filteredProducts = cookwareItems.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.type === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
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
                  {selectedProduct.type} ({selectedProduct.size} cm)
                </span>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>{selectedProduct.name}</h2>
                <p style={{ color: 'var(--color-slate)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>{selectedProduct.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(207, 168, 95, 0.2)', paddingTop: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-slate)' }}>Retail Price</div>
                    <div style={{ fontSize: '1.8rem', color: 'var(--color-gold)', fontFamily: 'var(--font-cormorant)' }}>₹{selectedProduct.price}</div>
                  </div>
                  <Button href="/wholesale" variant="primary">Bulk Inquiry</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>Cookware Catalog</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-slate)', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Explore our collection of high-grade enamel-coated traditional bowls and pans.
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
                  whiteSpace: 'nowrap'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <input 
            type="text" 
            placeholder="Search cookware..." 
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
                <div style={{ color: 'var(--color-gold-dark)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                  Size: {product.size} cm
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
              No cookware items found matching your search.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
