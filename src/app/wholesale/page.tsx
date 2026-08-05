"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function WholesalePage() {
  return (
    <div style={{ padding: '6rem 0', minHeight: '80vh', backgroundColor: 'var(--color-cream)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
            Wholesale & <span className="text-gold">Bulk Orders</span>
          </h1>
          <p style={{ color: 'var(--color-slate)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            We specialize in providing high-quality incense and cookware at competitive rates for temples, distributors, and retail businesses.
          </p>
        </div>

        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>Partner With Us</h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>Special Bulk Pricing</strong>
                <span style={{ color: 'var(--color-slate)' }}>Access our lowest tier pricing designed for B2B partners and high-volume orders.</span>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>Custom Blends & Labeling</strong>
                <span style={{ color: 'var(--color-slate)' }}>Require a specific scent or private labeling? We offer custom manufacturing services upon request.</span>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>Reliable Supply Chain</strong>
                <span style={{ color: 'var(--color-slate)' }}>Manufactured in Vadodara, Gujarat, we ensure timely and secure delivery across India.</span>
              </div>
            </li>
          </ul>

          <div style={{ borderTop: '1px solid rgba(207, 168, 95, 0.2)', paddingTop: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>Direct Inquiry</h3>
            <p style={{ color: 'var(--color-slate)', marginBottom: '2rem' }}>
              For instant assistance and quotes, contact our sales team directly via WhatsApp or Phone.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="tel:+917600026495" variant="primary">Call +91 7600026495</Button>
              <Button href="tel:+919426353483" variant="outline">Call +91 9426353483</Button>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-slate)' }}>GSTIN: 24HTGPP7238R1ZP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
