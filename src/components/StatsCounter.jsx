'use client';

import { useState, useEffect, useRef } from 'react';

const stats = [
  { label: 'Years of Service', value: 10, suffix: '+' },
  { label: 'Service Rate', value: 50, suffix: '%' },
  { label: 'Happy Families', value: 100000, suffix: '+' },
  { label: 'Plots Booked', value: 10000, suffix: '+' },
];

function Counter({ value, suffix, label, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, visible]);

  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold font-serif text-white mb-2 drop-shadow-lg">
        {count}{suffix}
      </div>
      <div className="text-white/80 font-medium">{label}</div>
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
    <section ref={ref} className="py-16 bg-gray-900">
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
