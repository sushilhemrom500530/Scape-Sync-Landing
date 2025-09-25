"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import BannerSection from "@/view/banner";
import Navbar from "./navbar";
import ServiceSection from "@/view/service";
import BuildEveryOneSection from "@/view/build-everyone";
import Testimonials from "@/view/testimonials";
import FrequentlyAsk from "@/view/faq-section";
import Footer from "./footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // ✅ destroy on unmount
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative lg:overflow-hidden">
      <Navbar />
      <BannerSection />
      <ServiceSection />
      <BuildEveryOneSection />
      <Testimonials />
      <FrequentlyAsk />
      <Footer />
    </main>
  );
}
