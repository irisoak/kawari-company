"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-container--wide header__inner">
        <Link href="/" className="header__brand" onClick={closeMenu}>
          <Image
            src="/images/kawari-logo.jpg"
            alt="The Kawari Company"
            width={420}
            height={160}
            priority
            className="header__logo"
          />
        </Link>

        <nav
          className={`header__navigation ${
            menuOpen ? "header__navigation--open" : ""
          }`}
          aria-label="Main navigation"
        >
          <ul className="header__nav">
            {site.navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="#contact"
          className="header__consultation"
          onClick={closeMenu}
        >
          Book a Consultation
        </Link>

        <button
          type="button"
          className="header__menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}