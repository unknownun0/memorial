'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
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
      <Reveal delay={100}><Gallery /></Reveal>
      <Reveal delay={100}><Reviews /></Reveal>
      <Reveal delay={100}><BlogSection /></Reveal>
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
