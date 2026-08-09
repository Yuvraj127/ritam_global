"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";

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

export default function CookwareCatalog() {
  const [activeItem, setActiveItem] = useState(cookwareItems[3]); // Default to Vadka Medium

  return (
    <div style={{ padding: '6rem 0', minHeight: '80vh', backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>
          Traditional <span className="text-gold">Cookware</span>
        </h1>
        <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--color-slate)', maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
          High-grade enamel-coated and porcelain-finish traditional cookware designed for authentic Indian kitchens. 
        </p>

        {/* Interactive Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Size Comparison / Selection List */}
          <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>Select Size & Model</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {cookwareItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    backgroundColor: activeItem.id === item.id ? 'var(--color-gold)' : 'transparent',
                    color: activeItem.id === item.id ? 'white' : 'var(--color-charcoal)',
                    border: '1px solid rgba(207, 168, 95, 0.3)',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ fontWeight: activeItem.id === item.id ? 600 : 400 }}>{item.name}</span>
                  <span style={{ opacity: 0.8, fontSize: '0.9rem' }}>{item.size} cm</span>
                </button>
              ))}
            </div>
          </div>

          {/* Highlight Detail View */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '450px',
              aspectRatio: '1',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: 'var(--shadow-soft)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              padding: '2rem',
              border: '2px dashed rgba(207, 168, 95, 0.3)'
            }}>
              {/* Abstract size indicator circle with Product Image */}
              <div style={{
                width: `${Math.min(itemSizeToPixels(activeItem.size), 250)}px`,
                height: `${Math.min(itemSizeToPixels(activeItem.size), 250)}px`,
                borderRadius: '50%',
                backgroundColor: 'rgba(207, 168, 95, 0.15)',
                position: 'absolute',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src={activeItem.img} 
                  alt={activeItem.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              
              <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.9)', padding: '1.5rem', borderRadius: 'var(--radius-md)', backdropFilter: 'blur(5px)' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>{activeItem.name}</h2>
                <p style={{ color: 'var(--color-slate)', marginBottom: '1rem', fontSize: '1.1rem' }}>{activeItem.desc}</p>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-gold)', fontFamily: 'var(--font-cormorant)' }}>
                  ₹{activeItem.price}
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '3rem' }}>
              <Button href="/wholesale" variant="primary">Order Bulk Supply</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple helper to scale real cm size to visually distinct pixel sizes
function itemSizeToPixels(cm: number) {
  return cm * 8; // Roughly scale 14cm -> 112px, 36cm -> 288px
}
