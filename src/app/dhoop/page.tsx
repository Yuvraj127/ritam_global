"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";

// Master Dhoop Catalog (7 Items)
const dhoopProducts = [
  { id: 'd1', name: 'Gugad', scent: 'Resin', desc: 'Traditional guggul resinoid for deep purification.' },
  { id: 'd2', name: 'Mogra', scent: 'Floral', desc: 'Sacred jasmine floral scent for daily devotion.' },
  { id: 'd3', name: 'Chandan', scent: 'Woody', desc: 'Pure sandalwood for cooling energy and peace.' },
  { id: 'd4', name: 'Gulab', scent: 'Floral', desc: 'Classic rose essence for purity and love.' },
  { id: 'd5', name: 'Lavender', scent: 'Floral', desc: 'Soothing floral notes for relaxation.' },
  { id: 'd6', name: 'Kapoor', scent: 'Camphor', desc: 'Camphor blend for spiritual awakening.' },
  { id: 'd7', name: 'Loban', scent: 'Resin', desc: 'Frankincense/Benzoin for removing negativity.' },
];

export default function DhoopCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof dhoopProducts[0] | null>(null);
  
  // Track selected format for each card (default to 'stick')
  const [formats, setFormats] = useState<Record<string, 'stick' | 'cone'>>({});

  const handleFormatChange = (id: string, format: 'stick' | 'cone') => {
    setFormats(prev => ({ ...prev, [id]: format }));
  };

  // Filter logic
  const filteredProducts = dhoopProducts.filter(p => {
    return p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.scent.toLowerCase().includes(searchQuery.toLowerCase());
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
              <img 
                src={(formats[selectedProduct.id] || 'stick') === 'stick' ? '/dhoop-stick.jpg' : '/dhoop-cone.jpg'} 
                alt={selectedProduct.name} 
                style={{ width: '100%', maxWidth: '250px', height: '250px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} 
              />
              <div style={{ flex: 1, minWidth: '200px' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(207, 168, 95, 0.1)', color: 'var(--color-gold-dark)', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                  Dry Dhoop {(formats[selectedProduct.id] || 'stick') === 'stick' ? 'Sticks' : 'Cones'}
                </span>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>{selectedProduct.name}</h2>
                <p style={{ color: 'var(--color-slate)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>{selectedProduct.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(207, 168, 95, 0.2)', paddingTop: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-slate)' }}>Estimated Price</div>
                    <div style={{ fontSize: '1.8rem', color: 'var(--color-gold)', fontFamily: 'var(--font-cormorant)' }}>
                      ₹{(formats[selectedProduct.id] || 'stick') === 'stick' ? 80 : 100}
                    </div>
                  </div>
                  <Button href={`https://wa.me/917600026495?text=${encodeURIComponent(`Hello Ritam Global, I am interested in a bulk inquiry for your Dry Dhoop: ${selectedProduct.name} (${(formats[selectedProduct.id] || 'stick') === 'stick' ? 'Sticks' : 'Cones'}).`)}`} variant="primary" target="_blank">Bulk Inquiry</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>Dry Dhoop Collection</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-slate)', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Pure resinous dry dhoop formulations available in both Stick and Cone formats.
        </p>

        {/* Search */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <input 
            type="text" 
            placeholder="Search dhoop fragrances..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '1rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(207, 168, 95, 0.3)',
              backgroundColor: 'var(--color-cream)',
              boxShadow: 'var(--shadow-soft)',
              outline: 'none',
              fontFamily: 'var(--font-outfit)',
              fontSize: '1rem',
              color: 'var(--color-charcoal)',
              width: '100%',
              maxWidth: '500px'
            }}
          />
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map((product, index) => {
            const currentFormat = formats[product.id] || 'stick';
            
            return (
              <div key={product.id} className="glass animate-fade-up category-card" style={{ animationDelay: `${(index % 4) * 0.15}s`, borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid rgba(207, 168, 95, 0.15)' }}>
                <img 
                  src={currentFormat === 'stick' ? '/dhoop-stick.jpg' : '/dhoop-cone.jpg'} 
                  alt={`${product.name} ${currentFormat}`} 
                  style={{ width: '100%', height: '220px', objectFit: 'cover', transition: 'all 0.3s ease' }} 
                />
                
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: 'rgba(255,255,255,0.7)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-charcoal)', margin: 0 }}>{product.name}</h3>
                    <span style={{ fontSize: '1.35rem', color: 'var(--color-gold)', fontFamily: 'var(--font-cormorant)' }}>
                      ₹{currentFormat === 'stick' ? 80 : 100}
                    </span>
                  </div>
                  
                  {/* Format Toggle Dropdown/Pills */}
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', backgroundColor: 'rgba(207, 168, 95, 0.1)', padding: '0.25rem', borderRadius: 'var(--radius-sm)' }}>
                    <button
                      onClick={() => handleFormatChange(product.id, 'stick')}
                      style={{
                        flex: 1, padding: '0.4rem', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
                        backgroundColor: currentFormat === 'stick' ? 'var(--color-gold)' : 'transparent',
                        color: currentFormat === 'stick' ? 'white' : 'var(--color-slate)',
                        fontWeight: currentFormat === 'stick' ? 600 : 400,
                        transition: 'all 0.2s', fontSize: '0.85rem'
                      }}
                    >
                      Sticks
                    </button>
                    <button
                      onClick={() => handleFormatChange(product.id, 'cone')}
                      style={{
                        flex: 1, padding: '0.4rem', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
                        backgroundColor: currentFormat === 'cone' ? 'var(--color-gold)' : 'transparent',
                        color: currentFormat === 'cone' ? 'white' : 'var(--color-slate)',
                        fontWeight: currentFormat === 'cone' ? 600 : 400,
                        transition: 'all 0.2s', fontSize: '0.85rem'
                      }}
                    >
                      Cones
                    </button>
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
            );
          })}
          
          {filteredProducts.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--color-slate)' }}>
              No dhoop fragrances found matching your search.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
