import React from 'react';
import { Navbar, HeroBody } from '@/components';
import { HeroMarquee } from './hero-marquee';

export function Hero() {
  return (
    <section className="w-full container-px pt-[56px] pb-[64px] text-white bg-primary bg-[url('/bg1.png')] bg-contain bg-[right_-150px_top_-150px] bg-no-repeat py-[72px]">
      <div className="container-w mx-auto">
        <Navbar />
        <HeroBody />
        <HeroMarquee />
      </div>
    </section>
  );
}
