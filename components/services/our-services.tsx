import React from 'react';
import {
  ServeicesSection1,
  ServicesSection2,
  ServicesSection3,
} from '@/components';

export function OurServices() {
  return (
    <section className="w-full container-px py-[50px] md:pt-[82px] md:pb-[120px]">
      <div className="container-w mx-auto flex flex-col gap-[40px] md:gap-[120px]">
        <ServeicesSection1 />
        <ServicesSection2 />
        <ServicesSection3 />
      </div>
    </section>
  );
}
