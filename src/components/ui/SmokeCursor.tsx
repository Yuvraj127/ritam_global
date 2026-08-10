"use client";
import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function SmokeCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let particleId = 0;
    let throttleTimer: any = null;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          setParticles((prev) => {
            const newParticles = [...prev, { id: particleId++, x: e.clientX, y: e.clientY }];
            if (newParticles.length > 20) return newParticles.slice(newParticles.length - 20);
            return newParticles;
          });
          throttleTimer = null;
        }, 50);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    const cleanupTimer = setInterval(() => {
      setParticles((prev) => {
        if (prev.length > 0) return prev.slice(1);
        return prev;
      });
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(cleanupTimer);
    };
  }, []);

  // Only render on client to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || !isVisible) return null;

  return (
    <>
      <div style={{
        position: 'fixed', top: mousePos.y, left: mousePos.x,
        width: '30px', height: '30px', border: '1px solid rgba(207, 168, 95, 0.5)',
        borderRadius: '50%', pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%, -50%)', transition: 'width 0.1s, height 0.1s, top 0.05s, left 0.05s',
        boxShadow: '0 0 15px rgba(207, 168, 95, 0.3)'
      }} />

      {particles.map((p) => (
        <div key={p.id} className="smoke-particle" style={{
          position: 'fixed', top: p.y, left: p.x,
          width: '12px', height: '12px', background: 'radial-gradient(circle, rgba(207, 168, 95, 0.4) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9998,
          transform: 'translate(-50%, -50%)',
        }} />
      ))}
    </>
  );
}
