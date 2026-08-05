"use client";

import React, { useState } from "react";

const fragrances = [
  { id: 1, name: "Mogra", desc: "Jasmine / Sacred Floral", color: "rgba(207, 168, 95, 0.1)" },
  { id: 2, name: "Rudraraksh", desc: "Spiritual / Woodsy", color: "rgba(207, 168, 95, 0.15)" },
  { id: 3, name: "Pandadi", desc: "Herbal / Fresh", color: "rgba(207, 168, 95, 0.1)" },
  { id: 4, name: "Kasturi", desc: "Musk / Exotic", color: "rgba(207, 168, 95, 0.2)" },
  { id: 5, name: "Lavender", desc: "Soothing Floral", color: "rgba(207, 168, 95, 0.1)" },
  { id: 6, name: "Gulab", desc: "Classic Rose", color: "rgba(207, 168, 95, 0.15)" },
  { id: 7, name: "Chandan", desc: "Sandalwood", color: "rgba(207, 168, 95, 0.2)" },
  // Truncated list for the elegant display, users can scroll or we categorize
];

export default function AgarbattiCatalog() {
  const [hoveredId, setHoveredId] = useState<number | null>(1);

  return (
    <div style={{ padding: '6rem 0', minHeight: '80vh', backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>Agarbatti Collection</h1>
        <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--color-slate)', maxWidth: '600px', margin: '0 auto 4rem' }}>
          Discover our premium range of incense sticks. Hover over a fragrance to reveal its essence.
        </p>

        {/* Elegant Horizontal Accordion */}
        <div className="agarbatti-accordion" style={{
          display: 'flex',
          height: '500px',
          width: '100%',
          overflow: 'hidden',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-soft)',
          border: '1px solid rgba(207, 168, 95, 0.3)'
        }}>
          {fragrances.map((item) => {
            const isActive = hoveredId === item.id;
            return (
              <div
                key={item.id}
                className={isActive ? "active-strip" : ""}
                onMouseEnter={() => setHoveredId(item.id)}
                style={{
                  flex: isActive ? 5 : 1,
                  backgroundColor: item.color,
                  borderRight: '1px solid rgba(255,255,255,0.5)',
                  transition: 'flex 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.5s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {!isActive ? (
                  <h3 style={{
                    transform: 'rotate(-90deg)',
                    whiteSpace: 'nowrap',
                    color: 'var(--color-charcoal)',
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    opacity: 0.7
                  }}>
                    {item.name}
                  </h3>
                ) : (
                  <div className="glass" style={{
                    padding: '3rem',
                    textAlign: 'center',
                    width: '80%',
                    borderRadius: 'var(--radius-md)',
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.3s ease 0.2s'
                  }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>{item.name}</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)' }}>{item.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
