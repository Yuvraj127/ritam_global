"use client";
import { useEffect, useState } from "react";

interface Particle {
  id: string;
  top: number;
  createdAt: number;
  isScrollingUp: boolean;
}

export default function IncenseScrollbar() {
  const [scrollRatio, setScrollRatio] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let tick = false;

    const updateRatio = () => {
        const scrollHeight = document.body.scrollHeight;
        const clientHeight = window.innerHeight;
        if (scrollHeight > clientHeight) {
            setScrollRatio(window.scrollY / (scrollHeight - clientHeight));
        }
    };
    
    // Initial update
    updateRatio();

    const handleScroll = () => {
      if (!tick) {
        window.requestAnimationFrame(() => {
          const scrollHeight = document.body.scrollHeight;
          const clientHeight = window.innerHeight;
          
          if (scrollHeight > clientHeight) {
             const ratio = window.scrollY / (scrollHeight - clientHeight);
             setScrollRatio(ratio);
             
             const diff = window.scrollY - lastScrollY;
             if (Math.abs(diff) > 2) {
                 const isScrollingUp = diff < 0;
                 setParticles(prev => {
                   const newParticles = [
                     ...prev,
                     { id: Math.random().toString(), top: ratio * clientHeight, createdAt: Date.now(), isScrollingUp }
                   ];
                   return newParticles.slice(-30); // Keep more particles for better visual
                 });
             }
          }
          lastScrollY = window.scrollY;
          tick = false;
        });
        tick = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateRatio);
    return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateRatio);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setParticles(prev => prev.filter(p => now - p.createdAt < 1500));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const emberTop = scrollRatio * 100;

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, width: '16px', height: '100vh', zIndex: 9999, pointerEvents: 'none' }}>
      {/* The Stick Container */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100vh', background: 'transparent' }}>
         
         {/* Unburnt Stick */}
         <div style={{ 
            position: 'absolute', 
            top: `${emberTop}%`, 
            bottom: 0, 
            right: '4px', 
            width: '8px', 
            background: 'linear-gradient(to right, #6b4423, #4a2f18)',
            borderRadius: '4px'
         }} />
         
         {/* Glowing Ember */}
         <div style={{
            position: 'absolute',
            top: `calc(${emberTop}% - 4px)`,
            right: '4px',
            width: '8px',
            height: '8px',
            background: 'linear-gradient(to bottom, #ffea00, #ff3300)',
            borderRadius: '50%',
            boxShadow: '0 0 12px 6px rgba(255, 50, 0, 0.9)',
            zIndex: 2
         }} />
         
         {/* Burnt Ash line (a thin gray line to show where it was) */}
         <div style={{
            position: 'absolute',
            top: 0,
            height: `${emberTop}%`,
            right: '7px',
            width: '2px',
            background: 'rgba(150, 150, 150, 0.4)',
            zIndex: 1
         }} />
      </div>

      {/* Particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className={`scroll-smoke-particle ${p.isScrollingUp ? 'smoke-reverse' : ''}`}
          style={{ top: `calc(${p.top}px - 6px)`, right: '6px' }}
        />
      ))}
    </div>
  );
}
