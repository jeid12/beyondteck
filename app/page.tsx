import Head from "next/head";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import WhatDriveUs from "./components/WhatDriverUs";
import WhatWeOffer from "./components/WhatWeOffer";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beyond Tech | Transforming Businesses</title>
        <meta name="description" content="Cutting-edge technology solutions to empower businesses and individuals. Beyond Tech: Bridging innovation and practical implementation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph, Twitter Card, SEO tags */}
      </Head>
      <div className="bg-white text-gray-900">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <WhatDriveUs />
          <WhatWeOffer />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}