import React from 'react';
import { Faqs } from './faq';
import Image from 'next/image';

export function ConnectOurCustomers() {
  return (
    <section className="w-full container-px py-[124px]">
      <div className="container-w mx-auto">
        <Image
          src="/connect-customers.png"
          alt="presto"
          height={403}
          width={1100}
          className="w-full mb-[56px]"
        />
        <div className="flex flex-col md:flex-row gap-[30px] justify-between items-start">
          <h3 className="text-black text-[28px] md:text-[36px] leading-normal md:leading-[56px] font-manrope font-normal max-w-[500px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <Faqs />
        </div>
      </div>
    </section>
  );
}
