"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

// Hero Slides Data
const heroSlides = [
  {
    id: 1,
    img: '/promo-banner.jpg',
    headline: 'Pure Aromas & <br /><span style="color: var(--color-gold)">Spiritual Elegance</span>',
    subtext: 'Elevate your everyday rituals with our premium collection of handcrafted incense and cookware.',
    primaryBtnText: 'Explore Catalog',
    primaryBtnLink: '#collections',
    secondaryBtnText: 'Wholesale Inquiry',
    secondaryBtnLink: '/wholesale'
  },
  {
    id: 2,
    img: '/category-agarbatti.jpg',
    headline: 'Discover the <br /><span style="color: var(--color-gold)">Perfect Scent</span>',
    subtext: 'Explore our collection of 25+ premium standard and colored agarbatti fragrances.',
    primaryBtnText: 'Shop Agarbatti',
    primaryBtnLink: '/agarbatti',
    secondaryBtnText: null,
    secondaryBtnLink: null
  },
  {
    id: 3,
    img: '/category-cookware.jpg',
    headline: 'Partner with <br /><span style="color: var(--color-gold)">Ritam Global</span>',
    subtext: 'Special wholesale pricing and custom private labeling available for bulk B2B orders.',
    primaryBtnText: 'Inquire Now',
    primaryBtnLink: '/wholesale',
    secondaryBtnText: null,
    secondaryBtnLink: null
  }
];

// Featured Products Data
const featuredProducts = [
  { 
    id: 's1', name: 'Mogra', category: 'Standard', type: 'Agarbatti', price: 50, img: '/pack-standard.jpg', 
    desc: 'Sacred jasmine floral scent for daily devotion.' 
  },
  { 
    id: 'd1', name: 'Gugad', category: 'Dry Dhoop', type: 'Cones', price: 100, img: '/dhoop-cone.jpg', 
    desc: 'Traditional guggul resinoid for deep purification.' 
  },
  { 
    id: 'vad-m', name: 'Vadka (Medium)', category: 'Deep Bowl', type: 'Cookware', price: 150, img: '/bowl-deep.jpg', 
    desc: 'Medium deep traditional bowl (26 cm).' 
  }
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<typeof featuredProducts[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play Carousel Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Quick View Modal Overlay (for Featured Products) */}
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
                  {selectedProduct.category}
                </span>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>{selectedProduct.name}</h2>
                <p style={{ color: 'var(--color-slate)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>{selectedProduct.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(207, 168, 95, 0.2)', paddingTop: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-slate)' }}>Retail Price</div>
                    <div style={{ fontSize: '1.8rem', color: 'var(--color-gold)', fontFamily: 'var(--font-cormorant)' }}>₹{selectedProduct.price}</div>
                  </div>
                  <Button 
                    href={`https://wa.me/917600026495?text=${encodeURIComponent(`Hello Ritam Global, I am interested in a bulk inquiry for your ${selectedProduct.type}: ${selectedProduct.name}.`)}`} 
                    variant="primary" 
                    target="_blank"
                  >
                    Bulk Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upgraded Hero Carousel */}
      <section style={{
        width: '100%',
        minHeight: '80vh',
        position: 'relative',
        backgroundColor: 'var(--color-charcoal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Images with Crossfade */}
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id} 
            className="animate-zoom-in"
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundImage: `url(${slide.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 0.8 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: currentSlide === index ? 1 : 0
            }}
          ></div>
        ))}
        
        {/* Glassmorphic Overlay Box with Content Transition */}
        <div className="glass animate-fade-up" style={{
          position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 2rem',
          padding: '4rem 3rem', textAlign: 'center', borderRadius: 'var(--radius-lg)',
          animationDelay: '0.2s',
          backgroundColor: 'rgba(250, 246, 240, 0.85)', backdropFilter: 'blur(10px)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.5s ease-in-out'
        }}>
          <h1 
            style={{ fontSize: '4rem', color: 'var(--color-charcoal)', marginBottom: '1.5rem', lineHeight: 1.1 }}
            dangerouslySetInnerHTML={{ __html: heroSlides[currentSlide].headline }}
          ></h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-slate)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            {heroSlides[currentSlide].subtext}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Button href={heroSlides[currentSlide].primaryBtnLink} variant="primary">
              {heroSlides[currentSlide].primaryBtnText}
            </Button>
            {heroSlides[currentSlide].secondaryBtnText && (
              <Button href={heroSlides[currentSlide].secondaryBtnLink!} variant="outline">
                {heroSlides[currentSlide].secondaryBtnText}
              </Button>
            )}
          </div>
        </div>

        {/* Carousel Dot Indicators */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: 0, width: '100%',
          display: 'flex', justifyContent: 'center', gap: '0.75rem', zIndex: 10
        }}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px', height: '12px', borderRadius: '50%', border: 'none',
                cursor: 'pointer', transition: 'all 0.3s ease',
                backgroundColor: currentSlide === index ? 'var(--color-gold)' : 'rgba(255,255,255,0.5)',
                transform: currentSlide === index ? 'scale(1.2)' : 'scale(1)'
              }}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Main Categories Grid */}
      <section id="collections" className="section-padding bg-ivory">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600 }}>Master Catalog</span>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-charcoal)', marginTop: '0.5rem' }}>Our Collections</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            
            <Link href="/agarbatti" style={{ textDecoration: 'none' }}>
              <div className="glass category-card animate-fade-up" style={{ animationDelay: '0.2s', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(207, 168, 95, 0.2)' }}>
                <img src="/category-agarbatti.jpg" alt="Agarbatti" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.9)' }}>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--color-charcoal)', margin: 0 }}>Agarbatti</h3>
                  <p style={{ color: 'var(--color-slate)', marginTop: '0.5rem', fontSize: '1rem' }}>25+ Premium Fragrances</p>
                </div>
              </div>
            </Link>

            <Link href="/dhoop" style={{ textDecoration: 'none' }}>
              <div className="glass category-card animate-fade-up" style={{ animationDelay: '0.4s', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(207, 168, 95, 0.2)' }}>
                <img src="/category-dhoop.jpg" alt="Dry Dhoop" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.9)' }}>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--color-charcoal)', margin: 0 }}>Dry Dhoop</h3>
                  <p style={{ color: 'var(--color-slate)', marginTop: '0.5rem', fontSize: '1rem' }}>Pure Sticks & Cones</p>
                </div>
              </div>
            </Link>

            <Link href="/cookware" style={{ textDecoration: 'none' }}>
              <div className="glass category-card animate-fade-up" style={{ animationDelay: '0.6s', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(207, 168, 95, 0.2)' }}>
                <img src="/category-cookware.jpg" alt="Traditional Cookware" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.9)' }}>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--color-charcoal)', margin: 0 }}>Cookware</h3>
                  <p style={{ color: 'var(--color-slate)', marginTop: '0.5rem', fontSize: '1rem' }}>Enamel Coated Bowls</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-cream" style={{ borderTop: '1px solid rgba(207, 168, 95, 0.1)', borderBottom: '1px solid rgba(207, 168, 95, 0.1)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600 }}>Best Sellers</span>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-charcoal)', marginTop: '0.5rem' }}>Featured Products</h2>
            </div>
            <Button href="/agarbatti" variant="outline">View All</Button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="glass animate-fade-up" style={{ animationDelay: `${0.2 + (index * 0.2)}s`, borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid rgba(207, 168, 95, 0.15)' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: 'var(--color-ivory)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-charcoal)', margin: 0 }}>{product.name}</h3>
                    <span style={{ fontSize: '1.3rem', color: 'var(--color-gold)', fontFamily: 'var(--font-cormorant)' }}>₹{product.price}</span>
                  </div>
                  <div style={{ color: 'var(--color-gold-dark)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                    {product.type}
                  </div>
                  <p style={{ color: 'var(--color-slate)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{product.desc}</p>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    style={{ width: '100%', padding: '0.8rem', backgroundColor: 'transparent', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', borderRadius: 'var(--radius-full)', cursor: 'pointer', transition: 'all 0.3s ease', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', fontWeight: 600 }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-gold)'; }}
                  >
                    Quick View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-charcoal section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>Why Choose Ritam Global?</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: 1.8 }}>
            Already trusted for quality, we are expanding our reach to bring our products closer to you. Each product is crafted with absolute care.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Quality Assured', desc: 'Premium natural ingredients and aromatic oils.' },
              { title: 'Bulk Supply', desc: 'Special pricing for B2B and temple authorities.' },
              { title: 'Wide Variety', desc: 'Over 40 distinct fragrances and traditional wares.' },
              { title: 'Custom Orders', desc: 'Custom scent blending and private labeling available.' }
            ].map((feature, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid rgba(207, 168, 95, 0.3)', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <h3 style={{ color: 'var(--color-gold)', fontSize: '1.25rem', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
