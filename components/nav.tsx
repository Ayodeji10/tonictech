'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Button, CancelIcon, HamburgerIcon } from '@/components';
import { NavLinks } from '@/constants';

function DesktopLinks() {
  return (
    <div className="hidden lg:flex items-center gap-10">
      {NavLinks.map(({ href, text }, index) => (
        <Link key={index} href={href} className="text-lg font-semibold">
          {text}
        </Link>
      ))}
      <Button
        text="Log In"
        bgColor="#FFF"
        color="#000"
        className="py-2 px-10"
      />
    </div>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="relative flex items-center justify-between p-4 mb-16">
      <Link href="/" aria-label="Homepage">
        <Image src="/logo.png" alt="Website logo" width={162} height={42} />
      </Link>
      <div className="lg:hidden">
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="text-black focus:outline-none"
        >
          {menuOpen ? <CancelIcon /> : <HamburgerIcon />}
        </button>
      </div>

      <DesktopLinks />
      {menuOpen && (
        <div
          ref={menuRef}
          className={`absolute top-16 left-0 w-full bg-primary lg:hidden transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col items-center py-4 gap-4">
            {NavLinks.map(({ href, text }, index) => (
              <Link
                key={index}
                href={href}
                className="text-lg font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {text}
              </Link>
            ))}
            <Button
              text="Log In"
              bgColor="#FFF"
              color="#000"
              className="py-2 px-10"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
