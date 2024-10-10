import Image from 'next/image';
import React from 'react';
import { EyeIcon, PenIcon, SunIcon } from '@/components/icons/generic';

const services = [
  {
    text: 'We connect our customers with the best.',
    icon: <PenIcon />,
    active: true,
  },
  {
    text: 'Advisor success customer launch party.',
    icon: <EyeIcon />,
    active: false,
  },
  { text: 'Business-to-consumer long tail.', icon: <SunIcon />, actice: false },
];

export function ServicesSection3() {
  return (
    <div className="flex flex-col md:flex-row gap-[50px] justify-between items-center">
      <div className="flex flex-col gap-[40px] max-w-[500px]">
        <h3 className="text-black text-[36px] leading-[56px] font-manrope font-normal">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h3>
        <div className="flex flex-col gap-6">
          {services.map((s, i) => {
            const bg = s.active ? 'bg-primary' : 'bg-white';
            const clr = s.active ? 'text-white' : 'text-black';
            return (
              <div
                key={i}
                className={`shadow-md w-full px-[20px] py-[16px] ${bg} ${clr} rounded-[4px] flex items-center gap-3`}
              >
                {s.icon}
                <p className="text-[16px] font-semibold">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Image
        src="/service-img5.png"
        alt="service"
        width={444}
        height={695}
        className="w-[300px] md:w-[300px] lg:w-[494px]"
      />
    </div>
  );
}
