import React from 'react';
import { Button } from './ui';

export function Enterprise() {
  return (
    <section className="w-full container-px mb-[84px]">
      <div className="container-w mx-auto bg-primary bg-[url('/bg2.png')] bg-contain bg-[right_-150px_top_-150px] bg-no-repeat py-[40px] md:py-[72px] rounded-[12px] flex flex-col items-center gap-[48px]">
        <h3 className="max-w-[716px] text-center text-white text-[35px] md:text-[48px] leading-normal md:leading-[72px] font-manrope font-normal">
          An enterprise template to ramp up your company website
        </h3>
        <form className="flex flex-col md:flex-row justify-center items-center gap-[24px]">
          <input
            placeholder="Your email address"
            className="text-[20px] px-[32px] py-[12px] bg-white text-black rounded-[50px] min-w-[370px]"
          />
          <Button
            type="submit"
            text="Start now"
            bgColor="#65E4A3"
            color="#000"
          />
        </form>
      </div>
    </section>
  );
}
