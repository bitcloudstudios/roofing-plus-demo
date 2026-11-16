"use client";

import React, { useState } from "react";
import { BUSINESS_INFO, SERVICES } from "@/data/roofingPlusData";
import { CheckCircleIcon, PhoneIcon } from "./Icons";

interface EstimateFormProps {
  selectedService?: string;
  onServiceChange?: (service: string) => void;
  idPrefix?: string;
  title?: string;
  subtitle?: string;
}

export function EstimateForm({
  selectedService,
  onServiceChange,
  idPrefix = "estimate",
  title = "Request a Free Estimate",
  subtitle = "Plain-English written estimates with clear options—no pressure.",
}: EstimateFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [internalService, setInternalService] = useState(SERVICES[0].title);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const service = selectedService || internalService;
  const handleServiceChange = (value: string) => {
    if (onServiceChange) {
      onServiceChange(value);
    } else {
      setInternalService(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border-2 border-[#1B365D] rounded-lg p-6 sm:p-8 shadow-sm">
        <div className="flex items-start gap-3 text-[#1B365D] mb-4">
          <CheckCircleIcon className="w-7 h-7 text-green-700 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xl font-bold text-[#111827]">
              Estimate Request Received
            </h3>
            <p className="text-sm text-[#4B5563] mt-1">
              Thank you, <span className="font-semibold text-[#111827]">{name}</span>.
              Your request regarding{" "}
              <span className="font-semibold text-[#111827]">{service}</span> has
              been recorded.
            </p>
          </div>
        </div>
        <div className="bg-[#F3F4F6] rounded-md p-4 text-sm text-[#1F2937] space-y-2 mb-5">
          <p>
            James D. Sykes or a member of the Roofing Plus team will follow up
            at <span className="font-semibold">{phone}</span>
            {email ? ` or ${email}` : ""} shortly.
          </p>
          <p className="text-[#4B5563]">
            Have an active leak or need to speak right away? Call us directly:
          </p>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 font-bold text-[#B91C1C] hover:underline"
          >
            <PhoneIcon className="w-4 h-4" />
            {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
          }}
          className="text-sm font-semibold text-[#1B365D] hover:underline cursor-pointer"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#D1D5DB] border-t-4 border-t-[#1B365D] rounded-lg p-6 sm:p-7 shadow-sm">
      <div className="mb-5">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1B365D]">
          {title}
        </h3>
        <p className="text-sm text-[#4B5563] mt-1">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor={`${idPrefix}-name`}
            className="block text-sm font-semibold text-[#1F2937] mb-1"
          >
            Your Name <span className="text-[#B91C1C]">*</span>
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            className="w-full min-h-[44px] px-3.5 py-2.5 text-base text-[#1F2937] bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B365D] focus:border-[#1B365D]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${idPrefix}-phone`}
              className="block text-sm font-semibold text-[#1F2937] mb-1"
            >
              Phone Number <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              id={`${idPrefix}-phone`}
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(570) 555-0199"
              className="w-full min-h-[44px] px-3.5 py-2.5 text-base text-[#1F2937] bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B365D] focus:border-[#1B365D]"
            />
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-email`}
              className="block text-sm font-semibold text-[#1F2937] mb-1"
            >
              Email Address
            </label>
            <input
              id={`${idPrefix}-email`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full min-h-[44px] px-3.5 py-2.5 text-base text-[#1F2937] bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B365D] focus:border-[#1B365D]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-service`}
            className="block text-sm font-semibold text-[#1F2937] mb-1"
          >
            Service Needed
          </label>
          <select
            id={`${idPrefix}-service`}
            value={service}
            onChange={(e) => handleServiceChange(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2.5 text-base text-[#1F2937] bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B365D] focus:border-[#1B365D]"
          >
            {SERVICES.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
            <option value="General Inquiry / Other">
              General Inquiry / Other
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-message`}
            className="block text-sm font-semibold text-[#1F2937] mb-1"
          >
            Brief Message
          </label>
          <textarea
            id={`${idPrefix}-message`}
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us a little about your roof or home repair need (town, type of issue, best time to call)..."
            className="w-full px-3.5 py-2.5 text-base text-[#1F2937] bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B365D] focus:border-[#1B365D]"
          />
        </div>

        <button
          type="submit"
          className="w-full min-h-[48px] px-5 py-3 bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold text-base rounded-md transition-colors cursor-pointer"
        >
          Request Free Estimate
        </button>
      </form>
    </div>
  );
}
