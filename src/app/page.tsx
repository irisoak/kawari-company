import type { Metadata } from "next";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Sectors from "@/components/Sectors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Kawari Company",
    title:
      "Kawari Company | Safeguarding, Regulation & Independent Review",
    description:
      "Independent consultancy supporting organisations with safeguarding, regulation, governance, investigations and independent reviews.",
    images: [
      {
        url: "/images/hero-architecture.jpeg",
        alt: "Kawari Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kawari Company | Safeguarding, Regulation & Independent Review",
    description:
      "Independent consultancy supporting organisations with safeguarding, regulation, governance, investigations and independent reviews.",
    images: ["/images/hero-architecture.jpeg"],
  },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kawari Company",
  url: "https://www.kawaricompany.com",
  logo: "https://www.kawaricompany.com/images/kawari-logo.jpg",
  description:
    "Independent consultancy supporting organisations with safeguarding, regulation, governance, investigations and independent reviews.",
  knowsAbout: [
    "Safeguarding",
    "Regulation",
    "Governance",
    "Independent reviews",
    "Complaints and investigations",
    "Board and leadership training",
    "Social care",
    "Early years",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            organizationStructuredData,
          ).replace(/</g, "\\u003c"),
        }}
      />

      <Header />
      <Hero />
      <Expertise />
      <Experience />
      <Sectors />
      <Contact />
      <Footer />
    </main>
  );
}