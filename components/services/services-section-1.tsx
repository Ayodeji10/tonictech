import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RightArrowIcon } from '@/components';
import { Services1Data } from '@/constants';

function ServiceCard({
  service: { img, title, text, link },
}: {
  service: { img: string; title: string; text: string; link: string };
}) {
  return (
    <div className="max-w-[300px]">
      <Image
        src={img}
        alt="service"
        width={300}
        height={354}
        className="mb-2 md:mb-6"
      />
      <p className="text-black text-[24px] font-normal mb-2 md:mb-6">{title}</p>
      <h5 className="text-grey text-[20px] mb-2 md:mb-7">{text}</h5>
      <div className="inline-block border-primary border-b-2">
        <Link href={link} className="flex gap-[12px] pb-2">
          Explore page <RightArrowIcon />
        </Link>
      </div>
    </div>
  );
}

export function ServeicesSection1() {
  return (
    <div className="flex flex-col gap-[40px] md:gap-[80px]">
      <div className="text-center">
        <p className="text-[20px] text-grey font-normal mb-6">Our Services</p>
        <h3 className="text-black text-[35px] md:text-[48px] font-manrope font-normal leading-normal md:leading-[72px] mx-auto max-w-[842px]">
          Handshake infographic mass market crowdfunding iteration.
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-[50px] md:gap-5 justify-between items-center">
        {Services1Data.map((s, i) => (
          <ServiceCard key={i} service={s} />
        ))}
      </div>
    </div>
  );
}
