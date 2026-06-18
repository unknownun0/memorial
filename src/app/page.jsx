'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import StatsCounter from '@/components/StatsCounter';
import Gallery from '@/components/Gallery';
import MoreServices from '@/components/MoreServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal delay={100}><Services /></Reveal>
      <Reveal delay={100}><StatsCounter /></Reveal>
      <Reveal delay={100}><Gallery /></Reveal>
      <Reveal delay={100}><MoreServices /></Reveal>
      <Reveal delay={100}><WhyChooseUs /></Reveal>
      <Reveal delay={100}><Reviews /></Reveal>
      <Reveal delay={100}><Contact /></Reveal>
      <Footer />
    </main>
  );
}
