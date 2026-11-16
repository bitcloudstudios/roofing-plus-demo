import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roofing Plus | Reliable Roofing & Home Repairs in Dingmans Ferry, PA",
  description:
    "Owner operated by James D. Sykes in Dingmans Ferry, PA. Over 20 years of experience in roof repairs, new roof installations, leak detection, and interior home improvements. Call (570) 828-9101 for a free estimate.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#1F2937]">
        {children}
      </body>
    </html>
  );
}
