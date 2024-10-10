import React from 'react';
import { Button } from '../ui';
import Image from 'next/image';

export function HeroBody() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-[56px]">
      <div className="max-w-[555px]">
        <h1 className="text-[35px] md:text-[48px] font-normal font-manrope leading-normal md:leading-[72px] mb-4">
          Save time by building fast with Boldo Template
        </h1>
        <p className="text-[16px] leading-[28px] mb-10">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
        <div className="flex items-center gap-6">
          <Button text="Buy template" bgColor="#65E4A3" color="#000" />
          <Button
            text="Log In"
            bgColor="transparent"
            color="#FFF"
            className="border-white border-2"
          />
        </div>
      </div>
      <Image src="/hero-img.png" alt="hero" width={493} height={423} />
    </div>
  );
}
