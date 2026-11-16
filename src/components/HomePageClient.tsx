"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { EstimateForm } from "@/components/EstimateForm";
import {
  CheckCircleIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ServiceIcon,
  StarIcon,
} from "@/components/Icons";
import {
  BUSINESS_INFO,
  REVIEWS,
  SERVICES,
  TRUST_POINTS,
} from "@/data/roofingPlusData";

export function HomePageClient() {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleAskAboutService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2937] pb-16 md:pb-0">
      <Header />

      <main className="flex-1">
        {/* 2. Straightforward Business Hero Section */}
        <section
          id="home"
          className="bg-white border-b border-[#E5E7EB] py-10 sm:py-16"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-7 pt-2">
                <p className="inline-block text-xs sm:text-sm font-bold tracking-wider uppercase text-[#B91C1C] bg-[#FEF2F2] border border-[#FECACA] px-3 py-1 rounded-sm mb-4">
                  {BUSINESS_INFO.tagline} &bull; Dingmans Ferry, PA
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1B365D] leading-tight mb-5">
                  Reliable Roofing &amp; Home Repairs in Northeast Pennsylvania
                </h1>

                <p className="text-base sm:text-lg text-[#1F2937] leading-relaxed mb-4">
                  Owner operated by{" "}
                  <strong className="font-semibold text-[#111827]">
                    {BUSINESS_INFO.owner}
                  </strong>
                  , <strong>Roofing Plus</strong> provides you with reliable
                  roofing services and professionally warrantied work.
                  You&apos;ve got endless choices when it comes to roofers, so
                  you want to make sure you hire the right team.
                </p>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-7">
                  You can rest easy knowing that we do exceptional work that is
                  timely and affordable. You&apos;ll never feel pressured to get
                  more done than needed—you&apos;ll get a complete estimate that
                  includes clear options and explanations that are plainly
                  written.
                </p>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3.5 mb-8">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3 bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold text-base rounded-md transition-colors shadow-xs"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>Call Us Today: {BUSINESS_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 bg-[#1B365D] hover:bg-[#142947] text-white font-bold text-base rounded-md transition-colors"
                  >
                    Request Free Estimate
                  </a>
                </div>

                {/* Quick Contractor Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E5E7EB]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircleIcon className="w-5 h-5 text-[#1B365D] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#111827]">
                        20+ Years Experience
                      </p>
                      <p className="text-xs text-[#4B5563]">
                        Owner-operated &amp; local
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircleIcon className="w-5 h-5 text-[#1B365D] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#111827]">
                        Warrantied Work
                      </p>
                      <p className="text-xs text-[#4B5563]">
                        Residential &amp; commercial
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircleIcon className="w-5 h-5 text-[#1B365D] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#111827]">
                        No-Pressure Quotes
                      </p>
                      <p className="text-xs text-[#4B5563]">
                        Plainly written options
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Estimate Box */}
              <div className="lg:col-span-5" id="hero-estimate">
                <EstimateForm
                  idPrefix="hero-estimate"
                  title="Request a Free Estimate"
                  subtitle="Tell us what your roof or home needs. We'll respond promptly with honest options."
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Services Section (Using Existing Site Content) */}
        <section
          id="services"
          className="bg-[#F3F4F6] border-b border-[#E5E7EB] py-14 sm:py-18"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold uppercase tracking-wider text-[#B91C1C] mb-2">
                Our Services
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] mb-4">
                Effective &amp; Affordable Roofing Services
              </h2>
              <p className="text-base text-[#1F2937] leading-relaxed mb-3">
                Making sure your home&apos;s roof is in good condition is really
                not an option, unless you enjoy throwing money out the window.
                Your roof doesn&apos;t just protect your home from the elements;
                it&apos;s a key regulator of energy use.
              </p>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Experienced with commercial and residential roofing, we are
                capable of handling any project. Whether you&apos;ve got a leak
                you can&apos;t seem to find, need a few tiles replaced, or want
                to have a new, energy-efficient roof installed, you may count on
                us to do the job right.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="w-11 h-11 rounded-md bg-[#EEF2F6] text-[#1B365D] flex items-center justify-center mb-4">
                      <ServiceIcon name={service.iconName} className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-5">
                      {service.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAskAboutService(service.title)}
                    className="inline-flex items-center text-sm font-bold text-[#1B365D] hover:text-[#B91C1C] transition-colors cursor-pointer self-start py-1"
                  >
                    Ask About This Service &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. About Roofing Plus (Company Trust & Experience) */}
        <section
          id="about"
          className="bg-white border-b border-[#E5E7EB] py-14 sm:py-18"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6">
                <p className="text-sm font-bold uppercase tracking-wider text-[#B91C1C] mb-2">
                  About Us &bull; Our Story
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] mb-5">
                  Over 20 Years of Reliable, Honest Craftsmanship
                </h2>

                <div className="space-y-4 text-base text-[#1F2937] leading-relaxed">
                  <p>
                    Having been in the construction industry for more than 20
                    years, <strong>Roofing Plus</strong> is a small but very
                    reliable roofing contractor. We have grown with changes in
                    roofing technology, application, and home design. It is our
                    solid commitment to the industry and our customers that
                    allows us to keep doing what we love and be one of the most
                    trusted in the business.
                  </p>
                  <p>
                    It is important for you to know all our roofers are
                    experienced and held to the highest work standard. Our
                    reputation is built on doing superior work. The bottom line
                    is you depend on your roof to keep your home secure and
                    depend on us to ensure your roof is in excellent condition.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-[#F3F4F6] border-l-4 border-[#1B365D] rounded-r-md">
                  <p className="text-sm font-bold text-[#1B365D]">
                    {BUSINESS_INFO.owner} &mdash; Owner &amp; Operator
                  </p>
                  <p className="text-sm text-[#4B5563] mt-0.5">
                    Based in {BUSINESS_INFO.address} &bull; Also specializing in
                    Interior Home Improvements
                  </p>
                </div>
              </div>

              {/* 3 Contractor Trust Points */}
              <div className="lg:col-span-6 space-y-4">
                {TRUST_POINTS.map((point, index) => (
                  <div
                    key={point.title}
                    className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-5 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#1B365D] text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111827] mb-1">
                        {point.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Homeowner Reviews / Testimonials */}
        <section
          id="reviews"
          className="bg-[#F3F4F6] border-b border-[#E5E7EB] py-14 sm:py-18"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-10">
              <p className="text-sm font-bold uppercase tracking-wider text-[#B91C1C] mb-2">
                Homeowner Reviews
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] mb-3">
                What Local Pennsylvania Homeowners Say
              </h2>
              <p className="text-base text-[#4B5563]">
                Our business has been built on word-of-mouth from neighbors
                across Pike County and Northeast PA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIEWS.map((review) => (
                <article
                  key={review.id}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div
                      className="flex items-center gap-1 text-[#D97706] mb-3"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <StarIcon key={idx} className="w-4 h-4" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-[#1F2937] leading-relaxed mb-5">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E5E7EB]">
                    <p className="text-sm font-bold text-[#111827]">
                      {review.name}
                    </p>
                    <p className="text-xs text-[#4B5563] mt-0.5">
                      {review.location} &bull; {review.service}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Contact & Service Area Section */}
        <section id="contact" className="bg-white py-14 sm:py-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Contact Info & PA Service Areas */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-[#B91C1C] mb-2">
                    Contact Us
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] mb-3">
                    Get in Touch with Roofing Plus
                  </h2>
                  <p className="text-base text-[#4B5563]">
                    Call us directly or send a message using the estimate form.
                    We&apos;ll give you a straightforward assessment and written
                    options.
                  </p>
                </div>

                <div className="space-y-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-[#B91C1C] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-[#4B5563]">
                        Phone
                      </p>
                      <a
                        href={BUSINESS_INFO.phoneHref}
                        className="text-lg font-bold text-[#1B365D] hover:text-[#B91C1C]"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MailIcon className="w-5 h-5 text-[#B91C1C] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-[#4B5563]">
                        Email
                      </p>
                      <a
                        href={BUSINESS_INFO.emailHref}
                        className="text-base font-semibold text-[#1B365D] hover:underline break-all"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-[#B91C1C] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-[#4B5563]">
                        Location
                      </p>
                      <p className="text-base font-medium text-[#1F2937]">
                        {BUSINESS_INFO.address}
                      </p>
                      <p className="text-sm text-[#4B5563]">
                        Owner: {BUSINESS_INFO.owner}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-lg font-bold text-[#1B365D] mb-3">
                    Business Hours
                  </h3>
                  <div className="border border-[#E5E7EB] rounded-lg divide-y divide-[#E5E7EB]">
                    {BUSINESS_INFO.hours.map((item) => (
                      <div
                        key={item.days}
                        className="flex items-center justify-between px-4 py-2.5 text-sm sm:text-base"
                      >
                        <span className="font-semibold text-[#1F2937]">
                          {item.days}
                        </span>
                        <span className="text-[#4B5563]">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pennsylvania Towns & Counties Served */}
                <div>
                  <h3 className="text-lg font-bold text-[#1B365D] mb-3">
                    Pennsylvania Towns &amp; Counties Served
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {BUSINESS_INFO.serviceAreas.map((area) => (
                      <span
                        key={area}
                        className="inline-block px-3 py-1.5 bg-[#F3F4F6] border border-[#E5E7EB] rounded-md text-sm font-medium text-[#1F2937]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Estimate Form */}
              <div className="lg:col-span-6">
                <EstimateForm
                  idPrefix="contact-estimate"
                  selectedService={selectedService}
                  title="Send Us Your Project Details"
                  subtitle="Fill out this quick form and we'll follow up to schedule your free estimate."
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Bottom Bar */}
      <footer className="bg-[#1B365D] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-center sm:text-left">
            <p className="font-bold text-base">
              {BUSINESS_INFO.name} &mdash; {BUSINESS_INFO.subtitle}
            </p>
            <p className="text-gray-300 mt-1">
              {BUSINESS_INFO.address} &bull; {BUSINESS_INFO.phoneDisplay} &bull;{" "}
              {BUSINESS_INFO.email}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white underline"
            >
              Find us on Facebook
            </a>
            <span className="text-gray-300">
              &copy; 2015&ndash;2026 Roofing Plus. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>

      {/* Mobile-Only Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-[#D1D5DB] shadow-[0_-2px_10px_rgba(0,0,0,0.08)] px-3 py-2.5 grid grid-cols-2 gap-3">
        <a
          href={BUSINESS_INFO.phoneHref}
          className="inline-flex items-center justify-center gap-2 min-h-[46px] bg-[#B91C1C] active:bg-[#991B1B] text-white font-bold text-sm rounded-md"
        >
          <PhoneIcon className="w-4 h-4" />
          <span>Call Now</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center min-h-[46px] bg-[#1B365D] active:bg-[#142947] text-white font-bold text-sm rounded-md"
        >
          Free Estimate
        </a>
      </div>
    </div>
  );
}
