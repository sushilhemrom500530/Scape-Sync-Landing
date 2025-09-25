import BannerSection from "@/view/banner";
import Navbar from "./navbar";
import ServiceSection from "@/view/service";
import BuildEveryOneSection from "@/view/build-everyone";
import Testimonials from "@/view/testimonials";
import FrequentlyAsk from "@/view/faq-section";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="relative lg:overflow-hidden ">
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
