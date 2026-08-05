import React from "react";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div style={{ padding: '6rem 0', minHeight: '80vh', backgroundColor: 'var(--color-ivory)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>
            About <span className="text-gold">Ritam Global</span>
          </h1>
          <p style={{ color: 'var(--color-slate)', fontSize: '1.15rem', lineHeight: 1.8, fontStyle: 'italic' }}>
            "Already trusted for quality, now expanding our reach to bring our products closer to you."
          </p>
        </div>

        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>Our Heritage</h2>
          <p style={{ color: 'var(--color-slate)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Based in the vibrant city of Vadodara, Gujarat, Ritam Global has built a legacy of crafting premium incense and traditional cookware. We understand that our products are not just commodities, but essential elements of your daily rituals and spiritual practices.
          </p>
          <p style={{ color: 'var(--color-slate)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Every agarbatti stick, every dhoop cone, and every enamel bowl we manufacture is crafted with absolute care. We prioritize non-toxic, premium natural ingredients to ensure that the aroma filling your space is pure, safe, and divine.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>Quality First</h3>
            <p style={{ color: 'var(--color-slate)' }}>We never compromise on the raw materials, ensuring a consistent, slow burn and a lasting fragrance.</p>
          </div>
          <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>Wide Variety</h3>
            <p style={{ color: 'var(--color-slate)' }}>With over 25 standard fragrances and a rich collection of premium masala incense, we have a scent for every mood.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'var(--color-cream)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(207, 168, 95, 0.2)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>Visit Us</h2>
          <p style={{ color: 'var(--color-slate)', marginBottom: '2rem' }}>
            92, Indraprasth Society, Novino Tarsali Rd,<br />
            Vadodara, Gujarat, India.
          </p>
          <Button href="/wholesale" variant="primary">Contact Our Team</Button>
        </div>

      </div>
    </div>
  );
}
