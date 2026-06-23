'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import PricingSection from '@/components/PricingSection';
import StatsCounter from '@/components/StatsCounter';
import Gallery from '@/components/Gallery';
import MoreServices from '@/components/MoreServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal delay={100}><Services /></Reveal>
      <Reveal delay={100}><PricingSection /></Reveal>
      <Reveal delay={100}><StatsCounter /></Reveal>
      <Reveal delay={100}><Gallery /></Reveal>
      <Reveal delay={100}><MoreServices /></Reveal>
      <Reveal delay={100}><WhyChooseUs /></Reveal>
      <Reveal delay={100}><Reviews /></Reveal>
      <Reveal delay={100}><FAQSection /></Reveal>
      <Reveal delay={100}><BlogSection /></Reveal>
      <Reveal delay={100}><Contact /></Reveal>
      <Footer />
      <ChatWidget />
    </main>
  );
}
