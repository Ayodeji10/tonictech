'use client';
import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { FaqIcon } from '../icons';

type AccordionItemProps = {
  title: string;
  content: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <div className="bg-primary grid place-items-center w-[28px] h-[28px] rounded-full">
            <FaqIcon />
          </div>
        </span>
      </button>
      <div
        ref={contentRef}
        className={clsx(
          'transition-all duration-500 ease-in-out overflow-hidden py-0'
        )}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <p className="text-gray-600 pb-4">{content}</p>
      </div>
    </div>
  );
};

export const Faqs: React.FC = () => {
  return (
    <div className="max-w-full md:max-w-[500px]">
      <AccordionItem
        title="We connect our customers with the best?"
        content="Lmagni veritatis ipsum eum architecto doloremque illum eveniet natus, perspiciatis eaque minima labore. Perferendis, explicabo perspiciatis repellat eligendi similique corrupti eveniet temporibus tempore obcaecati ad? Ipsum, deleniti?"
      />
      <AccordionItem
        title="How does Tailwind work?"
        content="Lint quis repellente, quod officiis, voluptas. Perferendis, explicabo perspiciatis repellat eligendi similique corrupti eveniet temporibus tempore obcaecati ad? Ipsum, deleniti?"
      />
    </div>
  );
};
