'use client';

import { useState } from 'react';
import { ALL_PRODUCTS, CATEGORIES, Product } from '../data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function FragranceFinder() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProfile, setSelectedProfile] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const scentProfiles = ['all', 'Floral', 'Woody', 'Devotional', 'Resin', 'Herbal', 'Fruity', 'Aquatic'];

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (product.stickColor && product.stickColor.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesProfile = selectedProfile === 'all' || product.scentProfile === selectedProfile;
    return matchesCategory && matchesSearch && matchesProfile;
  });

  return (
    <section id="catalog" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '20px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', marginBottom: '10px', fontSize: '0.8rem', color: '#d4af37', fontWeight: 600, textTransform: 'uppercase' }}>
          Explore Our Master Collection
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f8fafc', fontWeight: 800 }}>
          Interactive Fragrance & <span className="text-gold">Product Catalog</span>
        </h2>
        <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '1rem', lineHeight: 1.5 }}>
          Browse our complete range of 25+ Agarbatti fragrances, colored sticks, masala incense, dry dhoop, and traditional kitchenware.
        </p>
      </div>

      {/* Category Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '30px' }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              padding: '10px 20px',
              borderRadius: '30px',
              border: activeCategory === cat.id ? '1px solid #d4af37' : '1px solid rgba(212, 175, 55, 0.2)',
              background: activeCategory === cat.id ? 'linear-gradient(135deg, #d4af37 0%, #aa820a 100%)' : 'rgba(17, 37, 68, 0.6)',
              color: activeCategory === cat.id ? '#0b1a30' : '#cbd5e1',
              fontWeight: activeCategory === cat.id ? 700 : 500,
              cursor: 'pointer',
              fontSize: '0.88rem',
              transition: 'all 0.2s ease',
              boxShadow: activeCategory === cat.id ? '0 0 15px rgba(212, 175, 55, 0.4)' : 'none'
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search & Filter Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '36px', background: 'rgba(17, 37, 68, 0.5)', padding: '18px', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
        {/* Search Input */}
        <div style={{ flex: 1, minWidth: '240px' }}>
          <input
            type="text"
            placeholder="🔍 Search fragrance (e.g. Mogra, Chandan, Rose, Gugad, 14cm)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              background: '#0b1a30',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#f8fafc',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Scent Profile Dropdown */}
        <div style={{ width: '200px' }}>
          <select
            value={selectedProfile}
            onChange={(e) => setSelectedProfile(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              background: '#0b1a30',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#f8fafc',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          >
            <option value="all">🌸 All Scent Profiles</option>
            {scentProfiles.filter(p => p !== 'all').map((profile) => (
              <option key={profile} value={profile}>{profile}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Results Counter */}
      <div style={{ marginBottom: '20px', color: '#94a3b8', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
        <span>Showing <strong>{filteredProducts.length}</strong> products</span>
        {activeCategory !== 'all' && <span>Filter: <strong>{activeCategory.toUpperCase()}</strong></span>}
      </div>

      {/* Product Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '24px' }}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={(p) => setSelectedProduct(p)}
          />
        ))}
      </div>

      {/* No Results Fallback */}
      {filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', background: 'rgba(17, 37, 68, 0.4)', borderRadius: '16px', border: '1px border-dashed rgba(212, 175, 55, 0.3)' }}>
          <span style={{ fontSize: '3rem' }}>🔍</span>
          <h3 style={{ marginTop: '16px', color: '#f3e5ab' }}>No Products Found</h3>
          <p style={{ color: '#cbd5e1', marginTop: '8px' }}>Try searching with a different fragrance name or reset filters.</p>
          <button 
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); setSelectedProfile('all'); }}
            className="btn-outline-gold"
            style={{ marginTop: '20px' }}
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
