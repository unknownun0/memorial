'use client';

import { useState, useEffect, useRef } from 'react';

const stats = [
  { label: 'Years of Service', value: 15, suffix: '+' },
  { label: 'Service Rate', value: 98, suffix: '%' },
  { label: 'Happy Families', value: 2500, suffix: '+' },
  { label: 'Plots Booked', value: 1800, suffix: '+' },
];

function Counter({ end, suffix, label, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, visible]);

  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold font-serif text-gold-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-300 font-medium">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 gold-gradient-bg">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Counter key={i} {...stat} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
