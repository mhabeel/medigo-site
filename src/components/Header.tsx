'use client';

import Image from 'next/image';
import { FiPackage, FiInfo, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="brand flex items-center gap-2" aria-label="MediGo Home">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="MediGo Logo"
            className="logo"
            priority
          />
          <span className="logo-text font-semibold">MediGo</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#services" className="flex items-center gap-2">
            <FiPackage size={18} />
            Leistungen
          </a>
          <a href="#why" className="flex items-center gap-2">
            <FiInfo size={18} />
            Warum MediGo
          </a>
          <a href="#contact" className="flex items-center gap-2">
            <FiMail size={18} />
            Kontakt
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t mt-2 p-4 flex flex-col gap-4 shadow-lg"
         style={{backgroundColor: "#1e6aa1"}}>
          <a
            href="#services"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <FiPackage size={18} /> Leistungen
          </a>
          <a
            href="#why"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <FiInfo size={18} /> Warum MediGo
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <FiMail size={18} /> Kontakt
          </a>
        </div>
      )}
    </header>
  );
}
