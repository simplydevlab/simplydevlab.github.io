import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  twinkleSpeed: number;
  phase: number;
};

// Roughly one star per this many square CSS pixels.
const AREA_PER_STAR = 3500;

function createStars(width: number, height: number): Star[] {
  const count = Math.round((width * height) / AREA_PER_STAR);
  return Array.from({ length: count }, () => {
    // Most stars are faint pinpricks; a few are noticeably brighter.
    const bright = Math.random() < 0.06;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: bright ? 1 + Math.random() * 0.8 : 0.3 + Math.random() * 0.7,
      alpha: bright ? 0.8 + Math.random() * 0.2 : 0.25 + Math.random() * 0.5,
      twinkleSpeed: 0.4 + Math.random() * 1.6,
      phase: Math.random() * Math.PI * 2,
    };
  });
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let stars: Star[] = [];
    let frame = 0;
    let lastWidth = 0;
    let lastHeight = 0;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        const twinkle = reducedMotion
          ? 1
          : 0.65 + 0.35 * Math.sin((time / 1000) * star.twinkleSpeed + star.phase);
        ctx.globalAlpha = star.alpha * twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const resize = () => {
      // The canvas is sized in CSS to the large viewport (100lvh), which stays
      // put while a mobile URL bar shows and hides, so stars don't reshuffle
      // on scroll. Only rebuild when that size actually changes.
      const { clientWidth: width, clientHeight: height } = canvas;
      if (width === lastWidth && height === lastHeight) return;
      lastWidth = width;
      lastHeight = height;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#ffffff';
      stars = createStars(width, height);
      if (reducedMotion) draw(0);
    };

    resize();
    window.addEventListener('resize', resize);
    if (!reducedMotion) frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
