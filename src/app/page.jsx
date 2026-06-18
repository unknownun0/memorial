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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <StatsCounter />
      <Gallery />
      <MoreServices />
      <WhyChooseUs />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
