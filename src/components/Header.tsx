import Image from 'next/image';
import { FiPackage, FiInfo, FiMail } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="#" className="brand" aria-label="MediGo Home">
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="MediGo Logo"
            className="logo"
            priority
          />
          <span className="logo-text">MediGo</span>
        </a>

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
      </div>
    </header>
  );
}
