'use client';

import { useState } from 'react';
import { COOKWARE_PRODUCTS } from '../data/products';

export default function CookwareShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(COOKWARE_PRODUCTS[1].name);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(10);

  const currentCookware = COOKWARE_PRODUCTS.find(p => p.name === selectedProduct) || COOKWARE_PRODUCTS[0];
  const currentSizeObj = currentCookware.sizes ? currentCookware.sizes[selectedSizeIndex] || currentCookware.sizes[0] : { size: 'N/A', price: 0, usage: '' };

  const totalPrice = currentSizeObj.price * quantity;

  return (
    <section id="cookware" style={{ padding: '80px 20px', backgroundColor: 'rgba(7, 18, 34, 0.8)', borderTop: '1px solid rgba(212, 175, 55, 0.2)', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '20px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', marginBottom: '10px', fontSize: '0.8rem', color: '#d4af37', fontWeight: 600, textTransform: 'uppercase' }}>
            Traditional Kitchenware Collection
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f8fafc', fontWeight: 800 }}>
            Enamel Cookware & <span className="text-gold">Frying Bowls</span>
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
            High-grade traditional enamel-coated tadka pans, deep bowls (Vadka), shallow frying pans (Malpuda), and covered bowls with red knob lids. Exact sizes from 14cm to 36cm.
          </p>
        </div>

        {/* Pricing & Size Matrix Table */}
        <div className="glass-card" style={{ padding: '24px', marginBottom: '40px', overflowX: 'auto' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#f3e5ab', marginBottom: '16px', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '10px' }}>
            📋 Master Dimension & Price Sheet
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', color: '#d4af37', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '12px' }}>Product Name</th>
                <th style={{ padding: '12px' }}>Available Sizes</th>
                <th style={{ padding: '12px' }}>Price (INR)</th>
                <th style={{ padding: '12px' }}>Typical Usage / Description</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <td style={{ padding: '12px', fontWeight: 600, color: '#fff' }}>Vagariya (Small)</td>
                <td style={{ padding: '12px' }}>14 cm</td>
                <td style={{ padding: '12px', color: '#f39c12', fontWeight: 700 }}>₹50</td>
                <td style={{ padding: '12px' }}>Small tempering / tadka pan</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <td style={{ padding: '12px', fontWeight: 600, color: '#fff' }}>Vagariya (Large)</td>
                <td style={{ padding: '12px' }}>16 cm</td>
                <td style={{ padding: '12px', color: '#f39c12', fontWeight: 700 }}>₹60</td>
                <td style={{ padding: '12px' }}>Large tempering / tadka pan</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <td style={{ padding: '12px', fontWeight: 600, color: '#fff' }}>Vadka (Small)</td>
                <td style={{ padding: '12px' }}>20 cm</td>
                <td style={{ padding: '12px', color: '#f39c12', fontWeight: 700 }}>₹100</td>
                <td style={{ padding: '12px' }}>Deep traditional bowl</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <td style={{ padding: '12px', fontWeight: 600, color: '#fff' }}>Vadka (Medium)</td>
                <td style={{ padding: '12px' }}>26 cm</td>
                <td style={{ padding: '12px', color: '#f39c12', fontWeight: 700 }}>₹150</td>
                <td style={{ padding: '12px' }}>Medium deep traditional bowl</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <td style={{ padding: '12px', fontWeight: 600, color: '#fff' }}>Vadka (Large)</td>
                <td style={{ padding: '12px' }}>30 cm</td>
                <td style={{ padding: '12px', color: '#f39c12', fontWeight: 700 }}>₹200</td>
                <td style={{ padding: '12px' }}>Large deep traditional bowl</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <td style={{ padding: '12px', fontWeight: 600, color: '#fff' }}>Vadka (Larger)</td>
                <td style={{ padding: '12px' }}>36 cm</td>
                <td style={{ padding: '12px', color: '#f39c12', fontWeight: 700 }}>₹250</td>
                <td style={{ padding: '12px' }}>Extra-large deep traditional bowl</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <td style={{ padding: '12px', fontWeight: 600, color: '#fff' }}>Malpuda</td>
                <td style={{ padding: '12px' }}>26 cm</td>
                <td style={{ padding: '12px', color: '#f39c12', fontWeight: 700 }}>₹120</td>
                <td style={{ padding: '12px' }}>Wide shallow frying/serving bowl</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <td style={{ padding: '12px', fontWeight: 600, color: '#fff' }}>Bowl with Lid (Small)</td>
                <td style={{ padding: '12px' }}>17 cm</td>
                <td style={{ padding: '12px', color: '#f39c12', fontWeight: 700 }}>₹200</td>
                <td style={{ padding: '12px' }}>Covered bowl with red knob lid</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', fontWeight: 600, color: '#fff' }}>Bowl with Lid (Large)</td>
                <td style={{ padding: '12px' }}>26 cm</td>
                <td style={{ padding: '12px', color: '#f39c12', fontWeight: 700 }}>₹250</td>
                <td style={{ padding: '12px' }}>Covered bowl with red knob lid</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Interactive Bulk Cookware Estimator */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
          <div className="glass-card" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#f3e5ab', marginBottom: '10px' }}>
              🧮 Interactive Cookware Estimator
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '24px' }}>
              Calculate wholesale cost for kitchenware orders:
            </p>

            {/* Select Item */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '6px' }}>Select Cookware Model:</label>
              <select
                value={selectedProduct}
                onChange={(e) => {
                  setSelectedProduct(e.target.value);
                  setSelectedSizeIndex(0);
                }}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0b1a30', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#fff' }}
              >
                {COOKWARE_PRODUCTS.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* Select Size */}
            {currentCookware.sizes && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '6px' }}>Select Size:</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {currentCookware.sizes.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSizeIndex(idx)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '6px',
                        border: selectedSizeIndex === idx ? '1px solid #d4af37' : '1px solid rgba(212, 175, 55, 0.2)',
                        background: selectedSizeIndex === idx ? '#d4af37' : 'rgba(11, 26, 48, 0.8)',
                        color: selectedSizeIndex === idx ? '#0b1a30' : '#fff',
                        fontWeight: selectedSizeIndex === idx ? 700 : 400,
                        cursor: 'pointer'
                      }}
                    >
                      {s.size} (₹{s.price})
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '6px' }}>
                <span>Order Quantity:</span>
                <span style={{ color: '#d4af37', fontWeight: 700 }}>{quantity} Units</span>
              </div>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#d4af37' }}
              />
            </div>

            {/* Calculation Output Box */}
            <div style={{ background: 'rgba(7, 18, 34, 0.9)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)', marginBottom: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>ESTIMATED WHOLESALE TOTAL</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f39c12', fontFamily: 'Cinzel, serif', margin: '4px 0' }}>
                ₹{totalPrice.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                {quantity}x {currentCookware.name} ({currentSizeObj.size})
              </div>
            </div>

            <a
              href={`https://wa.me/917600026495?text=${encodeURIComponent(
                `Hello Ritam Global,\nI want to inquire about Cookware:\nItem: ${currentCookware.name}\nSize: ${currentSizeObj.size}\nQuantity: ${quantity} units\nEstimated Value: ₹${totalPrice}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              💬 Inquire This Cookware Order
            </a>
          </div>

          {/* Value Highlights */}
          <div>
            <div className="glass-card" style={{ padding: '24px', marginBottom: '16px' }}>
              <h4 style={{ color: '#f3e5ab', fontSize: '1.1rem', marginBottom: '8px' }}>✨ Premium Enamel Coating</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Durable, heat-resistant porcelain/enamel finish with traditional floral rim detailing. Non-toxic and safe for direct kitchen frying and food serving.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '24px', marginBottom: '16px' }}>
              <h4 style={{ color: '#f3e5ab', fontSize: '1.1rem', marginBottom: '8px' }}>📏 Full Size Range (14cm to 36cm)</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5 }}>
                From small tempering pans (Vagariya) to 36cm extra-large traditional mixing & batch frying bowls (Vadka).
              </p>
            </div>
            <div className="glass-card" style={{ padding: '24px' }}>
              <h4 style={{ color: '#f3e5ab', fontSize: '1.1rem', marginBottom: '8px' }}>📦 Bulk Packing for Traders</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Shipped securely in wholesale wooden/crated master cartons directly from Vadodara manufacturing hub.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
