'use client';

import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px', position: 'relative' }}>
      {/* Popular Badge */}
      {product.isPopular && (
        <div style={{ position: 'absolute', top: '16px', right: '16px' }} className="badge-gold">
          ⭐ Popular Choice
        </div>
      )}

      {/* Product Icon & Category Tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
          {product.category === 'cookware' ? '🥘' : product.category === 'dhoop' ? '🏺' : '🪔'}
        </div>
        <div>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8' }}>
            {product.category.toUpperCase()}
          </span>
          <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', fontWeight: 700, margin: '2px 0' }}>
            {product.name}
          </h3>
        </div>
      </div>

      {/* Scent Profile / Color Indicator */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
        {product.scentProfile && (
          <span style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#d4af37', padding: '3px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            🏷️ {product.scentProfile}
          </span>
        )}
        {product.stickColor && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1', padding: '3px 10px', borderRadius: '6px', fontSize: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            {product.colorHex && (
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: product.colorHex, border: '1px solid #fff' }} />
            )}
            Color: {product.stickColor}
          </span>
        )}
        {product.burnTime && (
          <span style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1', padding: '3px 10px', borderRadius: '6px', fontSize: '0.75rem' }}>
            ⏱️ {product.burnTime}
          </span>
        )}
        {product.format && (
          <span style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1', padding: '3px 10px', borderRadius: '6px', fontSize: '0.75rem' }}>
            📦 {product.format}
          </span>
        )}
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '20px', flexGrow: 1 }}>
        {product.description}
      </p>

      {/* Sizes & Pricing if Cookware */}
      {product.sizes && (
        <div style={{ background: 'rgba(7, 18, 34, 0.6)', padding: '12px', borderRadius: '8px', marginBottom: '16px', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
          <div style={{ fontSize: '0.75rem', color: '#d4af37', fontWeight: 600, marginBottom: '6px' }}>AVAILABLE SIZES & PRICES:</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.8rem', color: '#f8fafc' }}>
            {product.sizes.map((s, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{s.size.split(' ')[0]}:</span>
                <span style={{ color: '#f39c12', fontWeight: 700 }}>₹{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Button */}
      <button 
        onClick={() => onSelect(product)}
        className="btn-outline-gold" 
        style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
      >
        🔍 Quick View & Inquiry
      </button>
    </div>
  );
}
