"use client";

import React, { useState } from "react";
import { BUSINESS_INFO } from "@/data/roofingPlusData";
import { MailIcon, MapPinIcon, PhoneIcon, RoofLogoIcon } from "./Icons";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E7EB] shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-[#1B365D] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold hover:text-[#FCD34D] transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={BUSINESS_INFO.emailHref}
              className="hidden sm:inline-flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors"
            >
              <MailIcon className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>

          <div className="inline-flex items-center gap-1.5 text-gray-200 text-xs sm:text-sm">
            <MapPinIcon className="w-3.5 h-3.5 text-[#FCD34D] shrink-0" />
            <span>{BUSINESS_INFO.serviceAreaShort}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Business Title */}
          <a
            href="#home"
            className="flex items-center gap-3 focus:outline-none"
          >
            <RoofLogoIcon className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
            <div>
              <span className="block text-xl sm:text-2xl font-bold tracking-tight text-[#1B365D] leading-none">
                {BUSINESS_INFO.name}
              </span>
              <span className="block text-xs font-semibold text-[#4B5563] tracking-wide uppercase mt-1">
                {BUSINESS_INFO.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-[#1F2937] hover:text-[#1B365D] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold text-sm sm:text-base rounded-md transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Call for Free Estimate</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-md border border-[#D1D5DB] text-[#1B365D] hover:bg-[#F3F4F6] cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="lg:hidden border-t border-[#E5E7EB] py-3 space-y-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-semibold text-[#1F2937] hover:bg-[#F3F4F6] hover:text-[#1B365D] rounded-md"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-3 pb-1">
              <a
                href={BUSINESS_INFO.emailHref}
                className="inline-flex items-center gap-2 text-sm text-[#4B5563] hover:text-[#1B365D] py-1"
              >
                <MailIcon className="w-4 h-4" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
