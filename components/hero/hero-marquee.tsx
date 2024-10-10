import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export function HeroMarquee() {
  return (
    <div className="relative">
      <Marquee>
        <div className="flex items-center gap-10">
          <Image src="/boldo.png" alt="presto" width={146} height={41} />
          <Image src="/presto.png" alt="presto" width={146} height={41} />
          <Image src="/boldo.png" alt="presto" width={146} height={41} />
          <Image src="/presto.png" alt="presto" width={146} height={41} />
          <Image src="/boldo.png" alt="presto" width={146} height={41} />
          <Image src="/presto.png" alt="presto" width={146} height={41} />
          <Image src="/boldo.png" alt="presto" width={146} height={41} />
        </div>
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary to-transparent pointer-events-none"></div>
    </div>
  );
}
