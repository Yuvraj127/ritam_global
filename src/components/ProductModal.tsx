'use client';

import { Product } from '../data/products';
import { useState } from 'react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState('100 Packs (Bulk)');

  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Ritam Global,\nI am interested in placing an inquiry for:\n\n*Product:* ${product.name}\n*Category:* ${product.category}\n*Quantity/Pack:* ${quantity}\n\nPlease share wholesale pricing and availability.`
    );
    window.open(`https://wa.me/917600026495?text=${text}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-card" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '580px', width: '100%', padding: '30px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.5rem', cursor: 'pointer' }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg, #d4af37 0%, #aa820a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}>
            {product.category === 'cookware' ? '🥘' : product.category === 'dhoop' ? '🏺' : '🪔'}
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#d4af37', fontWeight: 600, letterSpacing: '1px' }}>
              RITAM GLOBAL MASTER CATALOG
            </span>
            <h2 style={{ fontSize: '1.6rem', color: '#f8fafc', margin: '2px 0' }}>
              {product.name}
            </h2>
          </div>
        </div>

        {/* Specifications List */}
        <div style={{ background: 'rgba(7, 18, 34, 0.7)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '20px' }}>
          <div style={{ fontSize: '0.85rem', color: '#d4af37', fontWeight: 700, marginBottom: '10px' }}>PRODUCT SPECIFICATIONS</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
            <div><strong>Category:</strong> {product.category.toUpperCase()}</div>
            {product.scentProfile && <div><strong>Scent Profile:</strong> {product.scentProfile}</div>}
            {product.stickColor && <div><strong>Stick Color:</strong> {product.stickColor}</div>}
            {product.burnTime && <div><strong>Burn Duration:</strong> {product.burnTime}</div>}
            {product.format && <div><strong>Available Format:</strong> {product.format}</div>}
            <div><strong>Manufacturer:</strong> Ritam Global Vadodara</div>
          </div>
        </div>

        {/* Product Overview */}
        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '20px' }}>
          {product.description}
        </p>

        {/* Recommended Usage */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '0.85rem', color: '#d4af37', fontWeight: 700, marginBottom: '8px' }}>RECOMMENDED USAGE & RITUALS</div>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
            {product.category === 'cookware'
              ? 'Ideal for traditional Indian kitchen tempering, sweet making, and food serving.'
              : 'Ideal for daily home prayers (Puja), temple rituals, meditation centers, aromatherapy, and evening air purification.'}
          </p>
        </div>

        {/* Direct Inquiry Selector */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#f8fafc', fontWeight: 600, marginBottom: '6px' }}>
            Select Estimated Inquiry Quantity:
          </label>
          <select 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0b1a30', border: '1px solid rgba(212, 175, 55, 0.4)', color: '#f8fafc', outline: 'none' }}
          >
            <option value="50 Packs (Trial)">50 Packs (Trial Order)</option>
            <option value="100 Packs (Standard)">100 Packs (Standard Wholesale)</option>
            <option value="500+ Packs (Distributor)">500+ Packs (Distributor Tier)</option>
            <option value="Custom Private Labeling">Custom Private Labeling Request</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={handleWhatsApp} className="btn-gold" style={{ flex: 1, justifyContent: 'center' }}>
            💬 Send WhatsApp Inquiry
          </button>
          <a href="tel:+917600026495" className="btn-outline-gold" style={{ flex: 1, justifyContent: 'center' }}>
            📞 Direct Call Us
          </a>
        </div>

      </div>
    </div>
  );
}
