/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sky Metro | The best for stable connection",
  description:
    "Experience blazing-fast 5G connectivity with reliable coverage, flexible no-contract data plans, and premium nationwide service designed for your lifestyle.",
  keywords: [
    "Sky Metro",
    "stable connection",
    "5G",
    "4G",
    "5g",
    "4g",
    "fiber",
    "internet",
    "data plans",
    "no-contract",
    "nationwide service",
    "flexible plans",
    "premium service",
    "fast internet",
    "reliable coverage",
    "high-speed connectivity",
    "affordable data plans",
    "unlimited data",
    "mobile internet",
    "home internet",
    "internet provider",
    "internet service provider",
    "internet plans",
    "internet packages",
    "internet deals",
    "internet offers",
    "internet promotions",
    "internet discounts",
    "internet bundles",
    "internet solutions",
    "internet technology",
    "internet innovation",
    "internet performance",
    "internet speed",
    "internet reliability",
    "internet security",
    "internet privacy",
    "packges ",
    "postpaid",
    "prepaid",
    "fiber postpaid",
    "fiber prepaid",
    "unlimited 5G",
    "100 Mbps",
    "200 Mbps",
    "300 Mbps",
  ],
  openGraph: {
    title: "Sky Metro | The best for stable connection",
    description:
      "Experience blazing-fast 5G connectivity with reliable coverage, flexible no-contract data plans, and premium nationwide service designed for your lifestyle.",
    url: "https://skymetro.vercel.app/",
    siteName: "Sky Metro",
    images: [
      {
        url: "https://skymetro.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky Metro | The best for stable connection",
    description:
      "Experience blazing-fast 5G connectivity with reliable coverage, flexible no-contract data plans, and premium nationwide service designed for your lifestyle.",
    images: ["https://skymetro.vercel.app/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Set reading direction based on locale
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${comfortaa.className} h-full antialiased`}
    >
      <body className="min-h-full relative overflow-x-hidden flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
