import React, { useState, useEffect, useRef, useCallback } from 'react';
import { reviews } from '../assets/data/reviewData';

const INTERVAL = 4000;

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const startRef = useRef<number>(0);

  // ── Detect visible card count based on viewport ──
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const startProgress = useCallback(() => {
    if (progRef.current) cancelAnimationFrame(progRef.current);
    startRef.current = performance.now();
    const tick = (now: number) => {
      const pct = Math.min(100, ((now - startRef.current) / INTERVAL) * 100);
      setProgress(pct);
      if (pct < 100) progRef.current = requestAnimationFrame(tick);
    };
    progRef.current = requestAnimationFrame(tick);
  }, []);

  const goTo = useCallback((index: number) => {
    const next = ((index % reviews.length) + reviews.length) % reviews.length;
    setActiveIndex(next);
    if (timerRef.current) clearInterval(timerRef.current);
    startProgress();
    timerRef.current = setInterval(() => {
      setActiveIndex(prev => {
        startProgress();
        return (prev + 1) % reviews.length;
      });
    }, INTERVAL);
  }, [startProgress]);

  useEffect(() => {
    goTo(0);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progRef.current) cancelAnimationFrame(progRef.current);
    };
  }, []);

  // ── Card width & gap as percentages of track ──
  const GAP = 16; // px — matches gap-4
  const cardWidthPct = 100 / visibleCards;
  const centerOffset = Math.floor(visibleCards / 2);

  // On mobile (1 card): no centering offset needed, just slide index × 100%
  // On tablet (2 cards): center the active card as left of center
  // On desktop (3 cards): center the active card in the middle slot
  const getTransform = () => {
    if (visibleCards === 1) {
      return `translateX(calc(-${activeIndex * 100}% - ${activeIndex * GAP}px))`;
    }
    const offset = activeIndex - centerOffset;
    return `translateX(calc(-${offset * cardWidthPct}% - ${offset * GAP}px))`;
  };

  const cardClass = (isActive: boolean) =>
    `shrink-0 rounded-[20px] p-5 sm:p-7 flex flex-col gap-4 relative overflow-hidden cursor-pointer transition-all duration-500 border
    ${visibleCards === 1 ? 'w-full' : visibleCards === 2 ? 'w-[calc(50%-8px)]' : 'w-[calc(33.333%-11px)]'}
    ${isActive
      ? 'bg-brand-orange border-transparent shadow-[0_20px_40px_-8px_rgba(234,88,12,0.3)] scale-[1.01]'
      : 'bg-white border-black/[0.06] hover:shadow-md'
    }`;

  return (
    <section className="py-16 sm:py-24 bg-brand-lightBg relative overflow-hidden" id="testimonials">

      {/* Background grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">

        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-brand-orange font-extrabold tracking-widest text-[11px] uppercase bg-orange-500/5 inline-block px-3 py-1 rounded border border-brand-orange/15 shadow-sm">
            TRUSTED PARTNER NETWORK
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-brand-navy uppercase tracking-tight">
            WHAT CUSTOMERS ON EBAY SAYS ABOUT <span className="text-brand-orange">QAY</span>
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mt-3" />
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                gap: `${GAP}px`,
                transform: getTransform(),
              }}
            >
              {reviews.map((rev, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={idx}
                    onClick={() => goTo(idx)}
                    className={cardClass(isActive)}
                  >
                    {/* Stars + quote icon */}
                    <div className="flex justify-between items-center">
                      <div className={`flex gap-0.5 ${isActive ? 'text-white' : 'text-brand-orange'}`}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-[14px] h-[14px] fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <svg
                        className={`w-7 h-7 fill-current ${isActive ? 'text-white/20' : 'text-brand-orange/10'}`}
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                      </svg>
                    </div>

                    {/* Quote */}
                    <p className={`text-sm leading-relaxed font-medium flex-1 ${isActive ? 'text-orange-50/90' : 'text-gray-500'}`}>
                      "{rev.text}"
                    </p>

                    {/* Footer */}
                    <div className={`pt-4 border-t flex items-center justify-between gap-2 ${isActive ? 'border-white/10' : 'border-black/[0.06]'}`}>
                      <div>
                        <p className={`text-[11px] font-black uppercase tracking-wider ${isActive ? 'text-white' : 'text-brand-navy'}`}>
                          {rev.author}
                        </p>
                        <p className={`text-[10px] font-bold uppercase tracking-wider mt-0.5 ${isActive ? 'text-orange-100/70' : 'text-gray-400'}`}>
                          {rev.location}
                        </p>
                      </div>
                      <div className={`flex items-center gap-1 border rounded-full px-2.5 py-1 flex-shrink-0 ${
                        isActive
                          ? 'bg-white/10 border-white/20 text-white'
                          : 'bg-emerald-500/10 border-emerald-500/15 text-emerald-700'
                      }`}>
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="text-[9px] font-black uppercase tracking-wider">Verified</span>
                      </div>
                    </div>

                    {/* Product meta */}
                    {rev.meta && (
                      <p className={`text-[10px] font-medium truncate ${isActive ? 'text-white/60' : 'text-gray-500'}`}>
                        Item: {rev.meta}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full border border-black/10 bg-white flex items-center justify-center text-brand-navy hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex items-center gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-[7px] rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-5 bg-brand-orange'
                      : 'w-[7px] bg-black/10 hover:bg-brand-orange/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next review"
              className="w-9 h-9 rounded-full border border-black/10 bg-white flex items-center justify-center text-brand-navy hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          <div className="flex justify-center mt-3">
            <div className="w-28 h-0.5 bg-black/[0.08] rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-orange rounded-full transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};