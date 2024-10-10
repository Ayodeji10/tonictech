'use client';
import React from 'react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ReviewsData } from '@/constants';

const OPTIONS: EmblaOptionsType = { align: 'center' };

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-full container-px py-[96px] bg-primary">
      <div className="container-w mx-auto">
        <div className="flex flex-col md:flex-row gap-[20px] justify-between md:items-end mb-[56px]">
          <h1 className="max-w-[716px] text-[35px] md:text-[48px] leading-normal md:leading-[72px] font-manrope font-normal text-white">
            An enterprise template to ramp up your company website
          </h1>
          <div className="flex items-center gap-4">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              color="red"
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
        <section className="embla">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ml-[-2rem] touch-pan-y touch-pinch-zoom backface-hidden">
              {ReviewsData.map((r, index) => (
                <div
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_33.33%] pl-[2rem]"
                  key={index}
                >
                  <div className="bg-white p-[20px] md:p-[40px] rounded-[12px] flex flex-col gap-[40px]">
                    <h4 className="text-black text-[24px] leading-[36px]">
                      {r.review}
                    </h4>
                    <div className="flex items-center gap-[16px]">
                      <Image src={r.img} alt={r.name} width={58} height={58} />
                      <div>
                        <h5 className="text-primary text-[16px] font-bold">
                          {r.name}
                        </h5>
                        <p className="text-primary text-[14px]">{r.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
