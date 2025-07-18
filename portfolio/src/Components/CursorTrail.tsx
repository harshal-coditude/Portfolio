'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorTrail = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const xTo = gsap.quickTo(circle, 'x', { duration: 0.3, ease: 'power3' });
    const yTo = gsap.quickTo(circle, 'y', { duration: 0.3, ease: 'power3' });

    const move = (e: MouseEvent) => {
      pos.x = e.clientX + 10; // offset by +10px to right
      pos.y = e.clientY + 10; // offset by +10px down
      xTo(pos.x);
      yTo(pos.y);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={circleRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '40px',
        height: '40px',
        backgroundColor: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.2)',
        opacity: 0.1,
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default CursorTrail;
