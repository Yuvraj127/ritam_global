"use client";

import React from "react";
import Button from "@/components/ui/Button";

const dhoopProducts = [
  { id: 1, name: "Gugad", desc: "Classic Resin & Earthy", type: "Stick & Cones" },
  { id: 2, name: "Mogra", desc: "Sweet Jasmine", type: "Stick & Cones" },
  { id: 3, name: "Chandan", desc: "Pure Sandalwood", type: "Stick & Cones" },
  { id: 4, name: "Gulab", desc: "Rich Rose", type: "Stick & Cones" },
  { id: 5, name: "Lavender", desc: "Calming Floral", type: "Stick & Cones" },
  { id: 6, name: "Kapoor", desc: "Camphor Blend", type: "Stick & Cones" },
  { id: 7, name: "Loban", desc: "Frankincense / Benzoin", type: "Stick & Cones" }
];

export default function DhoopCatalog() {
  return (
    <div style={{ padding: '6rem 0', minHeight: '80vh', backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>
          Dry <span className="text-gold">Dhoop</span> Collection
        </h1>
        <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--color-slate)', maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
          Pure resinous dry dhoop formulations designed for deep meditation and spiritual cleansing. Available in both convenient stick and traditional cone formats.
        </p>

        {/* Elegant Grid Layout for Dhoop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}>
          {dhoopProducts.map((product) => (
            <div key={product.id} className="glass" style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid rgba(207, 168, 95, 0.15)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(207, 168, 95, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {/* Symbolic icon placeholder */}
                <div style={{ width: '20px', height: '20px', border: '2px solid var(--color-gold)', borderRadius: '50%', borderTopColor: 'transparent', transform: 'rotate(45deg)' }} />
              </div>
              
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)' }}>{product.name}</h2>
              <p style={{ color: 'var(--color-slate)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{product.desc}</p>
              
              <div style={{
                marginTop: 'auto',
                padding: '0.5rem 1rem',
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                color: 'var(--color-gold-dark)',
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                {product.type}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <p style={{ color: 'var(--color-slate)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Looking for large quantities for your temple or store?</p>
          <Button href="/wholesale" variant="primary">Inquire Wholesale</Button>
        </div>
      </div>
    </div>
  );
}
