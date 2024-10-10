import Image from 'next/image';
import React from 'react';
import { CheckIcon } from '@/components';
import { Services2Data } from '@/constants';

export function ServicesSection2() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-[50px] justify-between items-center">
      <Image
        src="/service-img4.png"
        alt="service"
        width={494}
        height={610}
        className="w-[300px] md:w-[300px] lg:w-[494px]"
      />
      <div className="flex flex-col gap-[40px] max-w-[493px]">
        <h3 className="text-black text-[36px] leading-[56px] font-manrope font-normal">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h3>
        <div className="flex flex-col gap-6">
          {Services2Data.map((s, i) => (
            <div key={i} className="flex gap-[27px]">
              <div className="grid place-items-center w-[36px] h-[36px] bg-primary rounded-full">
                <CheckIcon />
              </div>
              <p className="text-[20px] text-black">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
